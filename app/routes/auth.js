module.exports = function(router, passport){

	//localhost:8080/auth/
	router.get('/', function(req, res){
		res.render('index.ejs');
	});


	//localhost:8080/auth/signup
	router.get('/signup', function(req, res){
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});

	//if they sign-up
	router.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/auth/signup',
		failureFlash: true
	}));

	//if they log-in
	router.post('/login', passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/auth/signup',
		failureFlash: true
	}));

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

	router.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})

};