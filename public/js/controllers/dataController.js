myApp.controller('dataController', function ($scope, Api){
	$scope.form = {};

	$scope.addToDatabase = function(){
		Api.Selected.save({}, $scope.form, function(){
			$scope.form = {};
		})
	}
});