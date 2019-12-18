const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Job = new Schema({
	job_company: {
		type: String
	},
	job_position: {
		type: String
	},
	job_location: {
		type: String
	},
	job_description: {
		type: String
	},
	job_applied_date: {
		type: String
	}
});

module.exports = mongoose.model('Job', Job);
