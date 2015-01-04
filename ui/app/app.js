
   
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

