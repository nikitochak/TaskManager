var app = angular.module('myApp', []);

app.constant("host", "http://localhost:8080/webapp/rest/service/");

app.controller('restControllerJSON', function($scope, $http, host) {
	$scope.error;
	$scope.isError = false;
	$scope.allTasks = [];
	$scope.name;
	$scope.content;
	$scope.isFinished;
	$scope.date;
	$scope.id;
	$scope.query;
	$scope.create = function() {
		if ($scope.name == undefined || $scope.content == undefined) {
			$scope.error = "Please enter the name of the task and its content.";
			$scope.isError = true;
		} else {
			$scope.isError = false;
			var req = {
				method : 'POST',
				url : host + 'create?name=' + $scope.name + '&date=' + $scope.date + '&content=' + $scope.content,
				headers : {},
				data : {}
			}
			$http(req).success(function(data, status, headers, config) {
				$scope.update();
			}).error(function(data, status, headers, config) {
				alert(status);
			})
		}
	}

	$scope.finish = function() {
		if ($scope.id < 0 || $scope.id == undefined || $scope.id >= $scope.allTasks.length) {
			$scope.error = "Please enter correct id of a task.";
			$scope.isError = true;
		} else {
			$scope.isError = false;
			var req = {
				method : 'POST',
				url : host + 'finish?id=' + $scope.id,
				headers : {},
				data : {}
			}
			$http(req).success(function(data, status, headers, config) {
				$scope.update();
			}).error(function(data, status, headers, config) {
				$scope.isError = true;
				$scope.error = "There is no task with that id.";
			})
		}

	}

	$scope.remove = function() {
		if ($scope.id == undefined || $scope.id < 0 || $scope.id >= $scope.allTasks.length) {
			$scope.error = "Please enter correct id of a task.";
			$scope.isError = true;

		} else {
			$scope.isError = false;
			var req = {
				method : 'DELETE',
				url : host + 'remove?id=' + $scope.id,
				headers : {},
				data : {}
			}
			$http(req).success(function(data, status, headers, config) {
				$scope.update();
			}).error(function(data, status, headers, config) {
				$scope.isError = true;
				$scope.error = "There is no task with that id.";
			})
		}

	}

	$scope.update = function() {
		var req = {
			method : 'GET',
			url : host + 'get',
			headers : {},
			data : {}
		}
		$http(req).success(function(data, status, headers, config) {
			$scope.allTasks = data;
		}).error(function(data, status, headers, config) {
			alert(status);
		})

		$scope.id = undefined;
		$scope.name = undefined;
		$scope.content = undefined;
		$scope.isFinished = false;
		$scope.date = undefined;
		$scope.query = undefined;
	}
});