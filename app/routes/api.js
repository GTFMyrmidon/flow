var Selected = require('../models/selected');
module.exports = function(router, passport){
	router.post('/selected', function(req, res){
		var course = new Selected();
		course.foundation = req.body.foundation;
		course.core = req.body.core;
		course.capstone = req.body.capstone;
		course.electives = req.body.electives;
		course.humanities = req.body.humanities;
		course.freeElectives = req.body.freeElectives;
		course.math = req.body.math;
		course.science = req.body.science;


		course.save(function(err, data){
			if(err)
				throw err;
			res.json();
		});
	});
};