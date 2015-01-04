var app = angular.module('myApp', []);

app.constant("host", "http://localhost:8080/webapp/rest/service/");

app.controller('restControllerSimple', function($scope, $http, host) {

	var req = {
		method : 'GET',
		url : host + 'simple',
		headers : {
			'Content-Type' : undefined
		},
		data : {

		}
	}

	$http(req).success(function(data, status, headers, config) {
		$scope.response = data;
	}).error(function(data, status, headers, config) {
		$scope.response = status;
	})

});

app.controller('restControllerJSON', function($scope, $http, host) {
	$scope.name;
	$scope.work;

	$scope.send = function() {
		var req = {
			method : 'GET',
			url : host + 'create?name=' + $scope.name + '&work=' + $scope.work,
			headers : {},
			data : {
				name : "ivan",
				work : "rabotete"
			}
		}
		$http(req).success(function(data, status, headers, config) {
			$scope.responseJSON = data;

		}).error(function(data, status, headers, config) {
			$scope.responseJSON = status;
		})
	}

});
app.filter('reverse', function() {
	return function(input, uppercase) {
		input = input || '';
		var out = "";
		for (var i = 0; i < input.length; i++) {
			out = input.charAt(i) + out;
		}
		// conditional based on optional argument
		if (uppercase) {
			out = out.toUpperCase();
		}
		return out;
	};
});

app.controller('formController', ['$scope', function($scope) {
	$scope.master = {};
	$scope.update = function(user) {
		$scope.master = angular.copy(user);
		alert($scope.master);
	};

	$scope.reset = function(form) {

		$scope.user = angular.copy($scope.master);
	};

	$scope.reset();
}]);

app.controller('formController2', function($scope) {
	$scope.isCorrect = false;
	$scope.manager = {};
	$scope.array = [];

	$scope.validate = function(user) {

		manager = angular.copy(user);
		if (manager.name == undefined || manager.email == undefined || manager.gender == undefined) {
			$scope.isCorrect = true;
		} else {
			$scope.array.push(manager);
			$scope.isCorrect = false;
		}
	};

});