/* Angularjs application to use with our client-side pages: Handles Routes and dependencies!*/

/**
 *@ngdoc object
 *@name myApp
 *@description
 *
 * This is the module for myApp. It uses the dependencies: checklist-model, ngRoute, and ngResource 
**/

var myApp = angular.module('myApp', ['checklist-model','ngRoute', 'ngResource']).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.when('/home', {templateUrl: '../public/partials/homepage.html'});
		$routeProvider.when('/courses', {templateUrl: '../public/partials/courses.html', controller: 'coursesController'});
		$routeProvider.when('/foundation', {templateUrl: '../public/partials/foundation.html', controller: 'coursesController'});
		$routeProvider.when('/core', {templateUrl: '../public/partials/core.html', controller: 'coursesController'});
		$routeProvider.when('/capstone', {templateUrl: '../public/partials/capstone.html', controller: 'coursesController'});
		$routeProvider.when('/electives', {templateUrl: '../public/partials/electives.html', controller: 'coursesController'});
		$routeProvider.when('/humanities', {templateUrl: '../public/partials/humanities.html', controller: 'coursesController'});
		$routeProvider.when('/math', {templateUrl: '../public/partials/math.html', controller: 'coursesController'});
		$routeProvider.when('/science', {templateUrl: '../public/partials/science.html', controller: 'coursesController'});
		$routeProvider.when('/auth/logout', {templateUrl: ' ', controller: 'reloadController'});
		$routeProvider.when('/auth', {templateUrl: ' ', controller: 'reloadController'});		
		$routeProvider.otherwise({redirectTo: '/home'});
		$locationProvider.html5Mode({enabled: true, requireBase: false});
	}]);
