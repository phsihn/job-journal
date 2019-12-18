import React, { Component } from 'react';
import axios from 'axios';
import Job from './Job';

export default class JobList extends Component {
	constructor(props) {
		super(props);
		this.deleteJob = this.deleteJob.bind(this);
		this.state = { jobs: [] };
	}

	// lifecycle method
	componentDidMount() {
		axios
			.get('http://localhost:4000/jobs/')
			.then(response => {
				this.setState({ jobs: response.data });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	// delete a job from the list
	/** 
	deleteJob() {
		console.log(this.props.match.params.id);
		axios
			.delete('http://localhost:4000/jobs/delete/' + this.props.match.params.id)
			.then(response => {
				console.log('response is ' + response);
			})
			.catch(error => {
				console.log(error);
			});
  }
*/
	deleteJob(jobId) {
		axios
			.delete('http://localhost:4000/jobs/delete/' + jobId)
			.then(response => {
				console.log('response is ' + response);
				this.setState({
					jobs: this.state.jobs.filter(job => job._id !== jobId)
				});
			})
			.catch(error => {
				console.log(error);
			});
	}
	// maps the list of jobs
	jobList() {
		return this.state.jobs.map((currentJob, i) => {
			return <Job job={currentJob} key={i} deleteJob={this.deleteJob} />;
		});
	}

	render() {
		return (
			<div>
				<h3>Job List</h3>
				<table className='table table-striped' style={{ marginTop: 20 }}>
					<thead>
						<tr>
							<th>Company</th>
							<th>Position</th>
							<th>Location</th>
							<th>Description</th>
							<th>Applied Date</th>
						</tr>
					</thead>
					<tbody>{this.jobList()}</tbody>
				</table>
			</div>
		);
	}
}
