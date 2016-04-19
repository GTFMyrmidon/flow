myApp.controller('coursesController', function($scope){
	$scope.foundation = [
		{'id': 1000, 'text': 'Computer Science as a Field of Work and Study'},
		{'id': 1300, 'text': 'Computer Science 1: Starting Computing'},
		{'id': 2270, 'text': 'Computer Science 2: Data Structures'},
		{'id': 2400, 'text': 'Computer Systems'},
		{'id': 3104, 'text': 'Algorithms'},
		{'id': 3155, 'text': 'Principles of Programming Languages'},
		{'id': 3308, 'text': 'Software Development Methods and Tools'}
	];
	$scope.course = {
		foundation: []
	};

	$scope.checkAll = function(){
		$scope.course.foundation = $scope.foundation.map(function(item) { return item.id; });

	};
	$scope.uncheckAll = function(){
		$scope.course.foundation = [];
	};
});