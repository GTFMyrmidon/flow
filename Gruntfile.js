module.exports = function(grunt) {

	grunt.initConfig({
	    ngdocs: {
			all: ['public/js/**/*.js']
		}
  	});

	grunt.loadNpmTasks('grunt-ngdocs');
};