myApp.factory('Api', function ($resource) {
	return {
		Selected: $resource('/api/selected/:id', {id: '@id'})
	}
});