var myApp = angular.module('myApp', ['checklist-model','ngRoute', 'ngResource', 'LocalStorageModule']).
	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$routeProvider.when('/home', {templateUrl: '../public/partials/homepage.html'});
		$routeProvider.when('/courses', {templateUrl: '../public/partials/courses.html', controller: 'coursesController'});
		$routeProvider.when('/foundation', {templateUrl: '../public/partials/foundation.html'});
		$routeProvider.when('/core', {templateUrl: '../public/partials/core.html'});
		$routeProvider.when('/capstone', {templateUrl: '../public/partials/capstone.html'});
		$routeProvider.when('/electives', {templateUrl: '../public/partials/electives.html'});
		$routeProvider.when('/humanities', {templateUrl: '../public/partials/humanities.html'});
		$routeProvider.when('/free-electives', {templateUrl: '../public/partials/freeElectives.html'});
		$routeProvider.when('/math', {templateUrl: '../public/partials/math.html'});
		$routeProvider.when('/science', {templateUrl: '../public/partials/science.html'});
		$routeProvider.when('/auth/logout', {templateUrl: '../views/secure/home.ejs', controller: 'reloadController'});		
		$routeProvider.otherwise({redirectTo: '/home'});

		$locationProvider.html5Mode({enabled: true, requireBase: false});
	}]);
