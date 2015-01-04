/**
 * The java script module which has a method for greeting.
 */
// declare a module
angular.module('ngAppStrictDemo', [])
// BadController will fail to instantiate, due to relying on automatic function
// annotation,
// rather than an explicit annotation
.controller('BadController', function($scope) {
	$scope.a = 1;
	$scope.b = 2;
}).controller('namesController', [ '$scope', function($scope) {

	$scope.names = [ {
		name : 'Jani',
		country : 'Norway'
	}, {
		name : 'Hege',
		country : 'Sweden'
	}, {
		name : 'Kai',
		country : 'Denmark'
	} ];
} ])
// Unlike BadController, GoodController1 and GoodController2 will not fail to be
// instantiated,
// due to using explicit annotations using the array style and $inject property,
// respectively.
.controller('GoodController1', [ '$scope', function($scope) {
	$scope.a = 1;
	$scope.b = 2;
} ]).controller('GoodController2', GoodController2);
function GoodController2($scope) {
	$scope.name = "World";
}
GoodController2.$inject = [ '$scope' ];
