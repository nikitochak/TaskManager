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