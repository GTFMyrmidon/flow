/* Controller to handle current location */

/**
 *@ngdoc controller
 *@name myApp.controller:navController
 *@description
 *
 * This is the navigation controller used in our app to get current location
**/

myApp.controller('navController', function($scope, $location){
	$scope.isActive = function(destination){
		return destination === $location.path();
	};
});
