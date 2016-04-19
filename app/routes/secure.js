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

	router.get('/*', function(req,res){
		res.redirect('/auth');
	});

}