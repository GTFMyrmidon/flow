var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var selectedSchema = mongoose.Schema({
	foundation: [Number],
	core: [Number],
	capstone: [Number],
	electives: [Number],
	humanities: [Number],
	freeElectives: [Number],
	math: [Number],
	science: [Number]
});
module.exports = mongoose.model('Selected', selectedSchema);