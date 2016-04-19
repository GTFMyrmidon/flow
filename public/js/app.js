var myApp = angular.module('myApp', [
	'ngRoute']).
	config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/home', {templateUrl: 'partials/home.html'});
		$routeProvider.when('/courses', {templateUrl: 'partials/courses.html'});
		$routeProvider.otherwise({redirectTo: '/home'});
	}])