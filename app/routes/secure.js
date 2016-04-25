var User = require('../models/user');
module.exports = function(router, passport){

	router.use(function(req, res, next){
		if(req.isAuthenticated()){
			return next();
		}
		res.redirect('/auth');
	});


	router.get('/selected', function(req, res){
		User.findOne({_id: req.user._id}, function (err, docs){
			res.json(docs);
		});
	});

	router.put('/selected/reset', function(req, res){
		User.findOneAndUpdate({_id: req.user._id}, {'$set': {'local.foundation': [], 'local.core': [], 'local.electives': [], 'local.capstone': [], 'local.math': [], 'local.science': []}} ,function (err, docs){
			if(err){
				console.log(err);
			};
			res.json(docs);
		});
	});	

	router.put('/selected', function(req, res){
		User.findOneAndUpdate({_id: req.user._id}, {'$addToSet': {'local.foundation': { '$each': req.body.foundation}, 'local.core': { '$each': req.body.core}, 'local.electives': { '$each': req.body.electives}, 'local.capstone': { '$each': req.body.capstone}, 'local.math': { '$each': req.body.math}, 'local.science': { '$each': req.body.science}}}, {safe: true, new: true}, function (err, docs){
			if(err){
				console.log("Something went wrong!");
			};
			res.json(docs);
		});
	});	

	/* localhost:8080/home */
	router.get('/home', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* localhost:8080/courses */
	router.get('/courses', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});	
	
	/* localhost:8080/foundation */
	router.get('/foundation', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* localhost:8080/core */
	router.get('/core', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* localhost:8080/capstone */
	router.get('/capstone', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* localhost:8080/electives */
	router.get('/electives', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* localhost:8080/humanities */
	router.get('/humanities', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* localhost:8080/free-electives */
	router.get('/free-electives', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* localhost:8080/math */
	router.get('/math', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* localhost:8080/science */
	router.get('/science', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* Wrong URL */
	router.get('/*', function(req,res){
		res.redirect('/auth');
	});

}