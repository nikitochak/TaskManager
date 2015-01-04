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