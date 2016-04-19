var myApp = angular.module('myApp', ['checklist-model','ngRoute']).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.when('/courses', {templateUrl: '../public/partials/courses.html'});
		$routeProvider.otherwise({redirectTo: '/home'});

		$locationProvider.html5Mode({enabled: true, requireBase: false});
	}]);