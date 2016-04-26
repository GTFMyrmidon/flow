/* controller Checklist/Flowchart pages*/
myApp.controller('coursesController',function($scope, $http, $window){

	/* Sending a get request to retrived checked values and store them in our local variable */
	$http.get('/selected').success(function(response){
		$scope.courses.foundation = response.local.foundation;
		$scope.courses.core = response.local.core;
		$scope.courses.electives = response.local.electives;
		$scope.courses.capstone = response.local.capstone;
		$scope.courses.math = response.local.math;
		$scope.courses.science = response.local.science;
	});

	/* Foundation Classes */
	$scope.foundation = [
		{id: 1000, text: 'Computer Science as a Field of Work and Study'},
		{id: 1300, text: 'Computer Science 1: Starting Computing'},
		{id: 2270, text: 'Computer Science 2: Data Structures'},
		{id: 2400, text: 'Computer Systems'},
		{id: 3104, text: 'Algorithms'},
		{id: 3155, text: 'Principles of Programming Languages'},
		{id: 3308, text: 'Software Development Methods and Tools'}
	];

	/* Core Classes */
	$scope.core = [
		{id: 3002, text: 'Human-Centered Computing Foundations'},
		{id: 3202, text: 'Introduction to Artificial Intelligence'},
		{id: 3287, text: 'Database and Information Systems'},
		{id: 3302, text: 'Introduction to Robotics'},
		{id: 3434, text: 'Theory of Computation'},
		{id: 3656, text: 'Numerical Computation'},
		{id: 4650, text: 'Intermediate Numerical Analysis 1'},
		{id: 3702, text: 'Cognitive Science'},
		{id: 3753, text: 'Operating Systems'},
		{id: 4229, text: 'Computer Graphis'},
		{id: 4239, text: 'Advanced Computer Graphics'},
		{id: 4253, text: 'Datacenter Scale Computing'},
		{id: 4273, text: 'Network Systems'},
		{id: 4302, text: 'Advanced Robotics'},
		{id: 4314, text: 'Algorithms for Molecular Biology'},
		{id: 4446, text: 'Chaotic Dynamics'},
		{id: 4448, text: 'Object-Oriented Analysis and Design'},
		{id: 4502, text: 'Data Mining'},
		{id: 4555, text: 'Compiler Construction'},
		{id: 4576, text: 'High-Performance Scientific Computing 1'},
		{id: 4586, text: 'High-Performance Scientific Computing 2'},
		{id: 4593, text: 'Computer Organization'},
		{id: 4753, text: 'Computer Performance Modeling'},
		{id: 4809, text: 'Computer Animaion'},
		{id: 2350, text: 'Digital Logic'},
		{id: 4613, text: 'Embedded System Design'},
		{id: 5833, text: 'Spec Tpcs: Unix System Administration'}
	];

	/* Elective Classes */
	$scope.electives = [
		{id: 3112, text: 'Human-Centered Computing Professional Development'},
		{id: 4830, text: 'Special Topics in Computer Science'},
		{id: 4900, text: 'Upper Division, Undergraduate level Independent Study'},
		{id: 4120, text: 'Introduction to Operations Research'}
	];

	/* Capstone Classes */
	$scope.capstone = [
		{id: 4308, text: 'Software Engineering Project 1'},
		{id: 4318, text: 'Software Engineering Project 2'},
		{id: 4348, text: 'Startup Essentials: Entrepreneurial Project 1'},
		{id: 4830, text: 'Startup Essentials: Entrepreneurial Project 2'},
		{id: 4950, text: 'Senior Thesis'},
	];

	/* Math Classes */
	$scope.math = [
		{id: 1350, text: 'Calculus 1 for Engineers'},
		{id: 1360, text: 'Calculus 2 for Engineers'},
		{id: 2820, text: 'Linear Algebra with CS Applications'},
		{id: 3130, text: 'Intro to Linear Algebra'},
		{id: 3310, text: 'Matrix Methods and Applications'},
		{id: 4570, text: 'Statistical Methods'},
		{id: 3022, text: 'Data Science Algorithms'},
		{id: 3570, text: 'Applied Probability'},
		{id: 4520, text: 'Intro to Mathematical Statistics'},
		{id: 3227, text: 'Probability, Statistics and Decision'},
		{id: 3510, text: 'Introduction to Probability and Statistics'},
		{id: 3810, text: 'Intoduction to Probability Theory'},
		{id: 3818, text: 'Intoduction to Statistics w/ Computer Applications'},
		{id: 4120, text: 'Engineering Statistics'},
		{id: 2824, text: 'Discrete Structures'},
		{id: 2703, text: 'Discrete Mathematics for Computer Engineers'},
		{id: 3170, text: 'Discrete Applied Mathematics'}
	];

	/* Science classes */
	$scope.science = [
		{id: 1110, text: 'General Physics 1'},
		{id: 1120, text: 'General Physics 2'},
		{id: 1140, text: 'Experimental Physics'},
		{id: 1211, text: 'General Chemistry for Engineers'},
		{id: 1113, text: 'General Chemistry 1'},
		{id: 1030, text: 'General Physics 1'},
		{id: 1040, text: 'Accelerated Introductory Astronomy 1'},
		{id: 1050, text: 'Accelerated Introductory Astronomy 2'},
		{id: 1060, text: 'Weather and the Athmosphere'},
		{id: 11132, text: 'Our Changing Environment: El nino, Ozone, and Climate'},
		{id: 1114, text: 'Laboratory in General Chemistry 1'},
		{id: 1221, text: 'Engineering General Chemistry Lab'},
		{id: 1133, text: 'General Chemistry 2'},
		{id: 1134, text: 'Laboratory in General Chemistry 2'},
		{id: 1030, text: 'Biology: A Human Approach 1'},
		{id: 1040, text: 'Biology: A Human Approach 2'},
		{id: 1210, text: 'General Biology 1'},
		{id: 1220, text: 'General Biology 2'},
		{id: 1230, text: 'General Biology Laboratory 1'},
		{id: 1240, text: 'General Biology Laboratory 2'},
		{id: 1001, text: 'Environmental Systems 1 - Climate and Vegetation'},
		{id: 1010, text: 'Introduction to Geology'},
		{id: 1020, text: 'Introduction to Earth History'},
		{id: 1150, text: 'Introduction to Cellular and Molecular Biology'},
		{id: 2012, text: 'Biological Psychology'}
	];

	/* Local array storing checked values for each category */
	$scope.courses = {
		foundation: [],
		core: [],
		electives: [],
		capstone: [],
		math: [],
		science: [],
	};
	
	/* Check all button for foundation section */
	$scope.checkFoundation = function(){
		$scope.courses.foundation = $scope.foundation.map(function(item) { return item.id; });

	};

	/* Uncheck all button for foundation section */
	$scope.uncheckFoundation = function(){
		$scope.courses.foundation = [];
	};

	/* Check all button for core section */
	$scope.checkCore = function(){
		$scope.courses.core = $scope.core.map(function(item) { return item.id; });

	};

	/* Uncheck all button for core section */
	$scope.uncheckCore = function(){
		$scope.courses.core = [];
	};

	/* Check all button for electives section */
	$scope.checkElectives = function(){
		$scope.courses.electives = $scope.electives.map(function(item) { return item.id; });

	};

	/* Uncheck all button for electives section */
	$scope.uncheckElectives = function(){
		$scope.courses.electives = [];
	};

	/* Check all button for capstone section */
	$scope.checkCapstone = function(){
		$scope.courses.capstone = $scope.capstone.map(function(item) { return item.id; });

	};

	/* Unheck all button for capstone section */
	$scope.uncheckCapstone = function(){
		$scope.courses.capstone = [];
	};

	/* Check all button for math section */
	$scope.checkMath = function(){
		$scope.courses.math = $scope.math.map(function(item) { return item.id; });

	};

	/* Uncheck all button for math section */
	$scope.uncheckMath = function(){
		$scope.courses.math = [];
	};

	/* Check all button for science section */
	$scope.checkScience = function(){
		$scope.courses.science = $scope.science.map(function(item) { return item.id; });

	};

	/* Uncheck all button for science section */
	$scope.uncheckScience = function(){
		$scope.courses.science = [];
	};

	/* Function to run when save button is clicked to upload selected values to database */
	$scope.save = function() {
	 	$http.put('/selected', $scope.courses).success(function(response){
	 		$window.location.reload();
	 	});
	};

	/* Function to run when save button is clicked to clear selected values in database so they can be overwriten */
	$scope.reset = function() {
	 	$http.put('/selected/reset').success(function(response){
	 		$window.location.reload();
	 	});
	};

	/* Progress Bars  START*/
	$scope.percentFoundation = function() {
		return (((($scope.courses.foundation.length)/7) * 100).toFixed(0));
	};
	$scope.percentCore = function() {
		var percent;
		if(($scope.courses.core.length < 6)){
			percent = (((($scope.courses.core.length)/6) * 100).toFixed(0));
			return percent;
		};
		return 100;
	};
	$scope.percentElectives = function() {
		return (((($scope.courses.electives.length)/4) * 100).toFixed(0));
	};
	$scope.percentCapstone = function() {
		var percent;
		if(($scope.courses.capstone.length < 2)){
			percent = (((($scope.courses.capstone.length)/2) * 100).toFixed(0));
			return percent;
		};
		return 100;
	};
	$scope.percentMath = function() {
		var percent;
		if(($scope.courses.math.length < 5)){
			percent = (((($scope.courses.math.length)/5) * 100).toFixed(0));
			return percent;
		};
		return 100;
	};
	$scope.percentScience = function() {
		var percent;
		if(($scope.courses.science.length < 5)){
			percent = (((($scope.courses.science.length)/5) * 100).toFixed(0));
			return percent;
		};
		return 100;
	};
	/* Progress Bars END */
});