var myApp = angular.module('myApp', [
	'ngRoute']).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.when('/courses', {templateUrl: '../public/partials/courses.html', controller: 'coursesController'});
		$routeProvider.otherwise({redirectTo: '/home'});

		$locationProvider.html5Mode({enabled: true, requireBase: false});
	}])