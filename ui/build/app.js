
   
var routerApp = angular.module('routerApp', ['ui.router','templates']);


routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home',{
            url:'/home',
            templateUrl:'main/main.html'
        })
        .state('home.create', {
        url: '/create',
        templateUrl: 'create/create.html'
        
    }).state('home.delete',{
        url:'/delete',
        templateUrl: 'delete/delete.html'

    });
        
});

routerApp.run(function($rootScope,$http) {

    $rootScope.update=function(){
    
        var req = {
            method : 'GET',
                url : '/service' + '/get',
            headers : {},
            data : {}
        };
        $http(req).success(function(data, status, headers, config) {
            $rootScope.allTasks = data;
        }).error(function(data, status, headers, config) {
            alert(status);
        });

        };

       $rootScope.error=undefined;
       $rootScope.isError=false;
       $rootScope.allTasks=[]; 
       $rootScope.query=undefined;
});


routerApp.directive('tableDirective', function(){

    return {
        templateUrl: 'table/table.html'
    };

});


'app controller goes here';
routerApp.controller('AppCtrl',function($rootScope,$scope){

});
'common service goes here';
routerApp.controller('createControllerJSON', function($scope, $rootScope,$http) {
	$scope.name=undefined;
	$scope.content = undefined;
	$scope.date = undefined;

	 $scope.create = function() {
        if ($scope.name === undefined || $scope.content === undefined) {
            $rootScope.error = "Please enter the name of the task and its content.";
            $rootScope.isError = true;
        } else {
            $rootScope.isError = false;
          
   
            var params={
                    name:$scope.name,
                    date:$scope.date,
                    content:$scope.content
            };
            var req = {
                method : 'POST',
                url : '/service' + '/create',
                data: JSON.stringify(params),
                headers: {
                            'Content-Type': 'application/json'
                }
            };
            $http(req).success(function(data, status, headers, config) {
                $rootScope.update();
            }).error(function(data, status, headers, config) {
                alert(status);
            });
       

           
        }
       		    $scope.name=undefined;
                $scope.content=undefined;
                $scope.date=undefined;
    };
});	
routerApp.controller('deleteControllerJSON', function($scope, $http, $rootScope) {

    $scope.finish = function() {
            var req = {
                method : 'POST',
                url : '/service' + '/allfinished',
                headers : {},
                data : {}
            };
            $http(req).success(function(data, status, headers, config) {
                $rootScope.update();
            }).error(function(data, status, headers, config) {
                $rootScope.isError = true;
                $rootScope.error = "An error occured. The server is not responding.";
            });
    };

    $scope.remove = function() { 
            var req = {
                method : 'DELETE',
                url : '/service' + '/removefinished',
                headers : {},
                data : {}
            };
            $http(req).success(function(data, status, headers, config) {
                $rootScope.update();
            }).error(function(data, status, headers, config) {
                $rootScope.isError = true;
                $rootScope.error = "An error occured. The server is not responding.";
            });
    };
});
routerApp.controller('MainCtrl', function ($scope) {
      $scope.availableOptions = [
        'Create new task.',
        'Delete task.',
        'Set the finish of a task.'
      ];


  });
routerApp.controller('tableControllerJSON', function($scope, $http, $rootScope) {

    $scope.finish = function(taskId) {
            $rootScope.isError=false;
            var req = {
                method : 'POST',
                url : '/service' + '/finish/' + taskId,
                headers : {},
                data : {}
            };
            $http(req).success(function(data, status, headers, config) {
                $rootScope.update();
            }).error(function(data, status, headers, config) {
                $rootScope.isError = true;
                $rootScope.error = "There is no task with that id.";
            });
    };

    $scope.remove = function(taskId) {
        
            $scope.isError = false;
            var req = {
                method : 'DELETE',
                url : '/service' + '/remove?id=' + taskId,
                headers : {},
                data : {}
            };
            $http(req).success(function(data, status, headers, config) {
                $rootScope.update();
            }).error(function(data, status, headers, config) {
                $rootScope.isError = true;
                $rootScope.error = "There is no task with that id.";
            });
        

    };

});