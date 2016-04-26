/* User model for storing user info/ checked items for each account */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
/* All the number arrays will have the checked values in our client-side, angular page*/
var userSchema = mongoose.Schema({
	local: {
		username: String,
		password: String,
		foundation: [Number],
		core: [Number],
		electives: [Number],
		capstone: [Number],
		math: [Number],
		science: [Number]
	}
});

/* Hash pasword to protect it */
userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
}

/* Check for valid password */
userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.local.password);
}

/* Export to be able to use elsewhere */
module.exports = mongoose.model('User', userSchema);