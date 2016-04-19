module.exports = function(router, passport){

	//localhost:8080/auth/
	router.get('/', function(req, res){
		res.render('index.ejs');
	});


	/* localhost:8080/auth/signup */
	router.get('/signup', function(req, res){
		res.render('auth/signup.ejs', { message: req.flash('signupMessage') });
	});

	/* localhost:8080/auth/login */
	router.get('/login', function(req, res){
		res.render('auth/signup.ejs', { message: req.flash('signupMessage') });
	});

	/* On sign up */
	router.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/auth/signup',
		failureFlash: true
	}));

	/* On log-in */
	router.post('/login', passport.authenticate('local-login', {
		successRedirect: '/home',
		failureRedirect: '/auth/signup',
		failureFlash: true
	}));

	/* Storing user Info */
	router.get('/:username/:password', function(req, res){
		var newUser = new User();
		newUser.local.username = req.params.username;
		newUser.local.password = req.params.password;
		console.log(newUser.local.username + " " + newUser.local.password);
		newUser.save(function(err){
			if(err)
				throw err;
		});
		res.send("Success!");
	});

	/* To logout */
	router.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})

};