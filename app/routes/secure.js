module.exports = function(router, passport){

	router.use(function(req, res, next){
		if(req.isAuthenticated()){
			return next();
		}
		res.redirect('/auth');
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