/* Controller to handle current location */
myApp.controller('navController', function($scope, $location){
	$scope.isActive = function(destination){
		return destination === $location.path();
	};
});
