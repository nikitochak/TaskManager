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