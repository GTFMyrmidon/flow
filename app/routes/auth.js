module.exports = function(router, passport){

	/* Handles flowcu.herokuapp.com/ route */
	router.get('/', function(req, res){
		res.render('index.ejs');
	});


	/* Handles flowcu.herokuapp.com/auth/signup route */
	router.get('/signup', function(req, res){
		res.render('auth/signup.ejs', { message: req.flash('signupMessage') });
	});

	/* Handles flowcu.herokuapp.com/auth/login route */
	router.get('/login', function(req, res){
		res.render('auth/signup.ejs', { message: req.flash('signupMessage') });
	});

	/* Redirect to homepage upon succesful registration */
	router.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/home',
		failureRedirect: '/auth/signup',
		failureFlash: true
	}));

	/* Redirect to homepage upon succesful login */
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