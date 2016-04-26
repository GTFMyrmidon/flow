/* Controller to reload page */

/**
 *@ngdoc controller
 *@name myApp.controller:reloadController
 *@description
 *
 * This is the reload controller used on our app to refresh the current page 
**/

myApp.controller('reloadController', function($window){
	$window.location.reload();	
});