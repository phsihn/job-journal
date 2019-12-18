const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

let Job = require('./job.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/jobs', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
	console.log('MongoDB database connection established successfully');
});

app.listen(PORT, function() {
	console.log('Server is running on Port: ' + PORT);
});

// use as middleware to take requests with path ...
const jobRoutes = express.Router();
app.use('/jobs', jobRoutes);

// all jobs
jobRoutes.route('/').get(function(req, res) {
	Job.find(function(err, jobs) {
		if (err) {
			console.log(err);
		} else {
			res.json(jobs);
		}
	});
});

// get a job by id
jobRoutes.route('/:id').get(function(req, res) {
	let id = req.params.id;
	Job.findById(id, function(err, job) {
		res.json(job);
	});
});

// add a job
jobRoutes.route('/add').post(function(req, res) {
	let job = new Job(req.body);
	job
		.save()
		.then(job => {
			res.status(200).json({ job: 'job added successfully' });
		})
		.catch(err => {
			res.status(400).send('adding new job failed');
		});
});

// update by id
jobRoutes.route('/update/:id').post(function(req, res) {
	Job.findById(req.params.id, function(err, job) {
		if (!job) {
			res.status(404).send('data not found');
		} else {
			job.job_company = req.body.job_company;
			job.job_position = req.body.job_position;
			job.job_location = req.body.job_location;
			job.job_description = req.body.job_description;
			job.job_applied_date = req.body.job_applied_date;

			job
				.save()
				.then(job => {
					res.json('Job Updated');
				})
				.catch(err => {
					res.status(400).send('Update has failed');
				});
		}
	});
});

// delete
jobRoutes.route('/delete/:id').delete(function(req, res) {
	Job.findByIdAndDelete(req.params.id, function(err, job) {
		if (err) {
			res.json('Failed to delete');
		} else {
			res.json('Successfully deleted');
		}
	});
});
