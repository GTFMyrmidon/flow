var User = require('../models/user');
module.exports = function(router, passport){

	/* Checking if user is authenticated; if not, send redirect to main info page */
	router.use(function(req, res, next){
		if(req.isAuthenticated()){
			return next();
		}
		res.redirect('/auth');
	});

	/* Route to get user info; courses taken arrays */
	router.get('/selected', function(req, res){
		User.findOne({_id: req.user._id}, function (err, docs){
			res.json(docs);
		});
	});

	/* Route to update user info; clearing courses taken arrays */
	router.put('/selected/reset', function(req, res){
		User.findOneAndUpdate({_id: req.user._id}, {'$set': {'local.foundation': [], 'local.core': [], 'local.electives': [], 'local.capstone': [], 'local.math': [], 'local.science': []}} ,function (err, docs){
			if(err){
				console.log(err);
			};
			res.json(docs);
		});
	});

	/* Route to update user info; inserting courses taken arrays */
	router.put('/selected', function(req, res){
		User.findOneAndUpdate({_id: req.user._id}, {'$addToSet': {'local.foundation': { '$each': req.body.foundation}, 'local.core': { '$each': req.body.core}, 'local.electives': { '$each': req.body.electives}, 'local.capstone': { '$each': req.body.capstone}, 'local.math': { '$each': req.body.math}, 'local.science': { '$each': req.body.science}}}, {safe: true, new: true}, function (err, docs){
			if(err){
				console.log("Something went wrong!");
			};
			res.json(docs);
		});
	});

	/* Router to handle navigation to homepage once user is logged in */
	router.get('/home', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* Router to handle navigation to courses tab once user is logged in */
	router.get('/courses', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* Router to handle foundation to courses tab once user is logged in */
	router.get('/foundation', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* Router to handle navigation to core tab once user is logged in */
	router.get('/core', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* Router to handle navigation to capstone tab once user is logged in */
	router.get('/capstone', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* Router to handle navigation to electives tab once user is logged in */
	router.get('/electives', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* Router to handle navigation to math tab once user is logged in */
	router.get('/math', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* Router to handle navigation to science tab once user is logged in */
	router.get('/science', function(req, res){
		res.render('secured/home.ejs', { user: req.user });
	});

	/* Wrong URL */
	router.get('/*', function(req,res){
		res.redirect('404.ejs');
	});

}
