import React, { Component } from 'react';
import axios from 'axios';

export default class CreateJob extends Component {
	constructor(props) {
		super(props);

		this.onChangeJobCompany = this.onChangeJobCompany.bind(this);
		this.onChangeJobPosition = this.onChangeJobPosition.bind(this);
		this.onChangeJobLocation = this.onChangeJobLocation.bind(this);
		this.onChangeJobDescription = this.onChangeJobDescription.bind(this);
		this.onChangeJobAppliedDate = this.onChangeJobAppliedDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			job_company: '',
			job_position: '',
			job_location: '',
			job_description: '',
			job_applied_date: ''
		};
	}

	// update job company
	onChangeJobCompany(e) {
		this.setState({
			job_company: e.target.value
		});
	}

	// update job position
	onChangeJobPosition(e) {
		this.setState({
			job_position: e.target.value
		});
	}

	// update job location
	onChangeJobLocation(e) {
		this.setState({
			job_location: e.target.value
		});
	}

	// update job description
	onChangeJobDescription(e) {
		this.setState({
			job_description: e.target.value
		});
	}

	// update job applied date
	onChangeJobAppliedDate(e) {
		this.setState({
			job_applied_date: e.target.value
		});
	}

	// when the form is submitted
	onSubmit(e) {
		e.preventDefault();

		console.log(`Form submitted:`);
		console.log(`Todo Description: ${this.state.job_company}`);

		const newJob = {
			job_company: this.state.job_company,
			job_position: this.state.job_position,
			job_location: this.state.job_location,
			job_description: this.state.job_description,
			job_applied_date: this.state.job_applied_date
		};

		axios
			.post('http://localhost:4000/jobs/add', newJob)
			.then(res => console.log(res.data));

		this.setState({
			job_company: '',
			job_position: '',
			job_location: '',
			job_description: '',
			job_applied_date: ''
		});
	}

	render() {
		return (
			<div style={{ marginTop: 10 }}>
				<h3>Create New Job</h3>
				<form onSubmit={this.onSubmit}>
					<div className='form-group'>
						<label>Company: </label>
						<input
							type='text'
							className='form-control'
							value={this.state.job_company}
							onChange={this.onChangeJobCompany}
						/>
					</div>
					<div className='form-group'>
						<label>Position: </label>
						<input
							type='text'
							className='form-control'
							value={this.state.job_position}
							onChange={this.onChangeJobPosition}
						/>
					</div>
					<div className='form-group'>
						<label>Location: </label>
						<input
							type='text'
							className='form-control'
							value={this.state.job_location}
							onChange={this.onChangeJobLocation}
						/>
					</div>
					<div className='form-group'>
						<label>Applied Date: </label>
						<input
							type='text'
							className='form-control'
							value={this.state.job_applied_date}
							onChange={this.onChangeJobAppliedDate}
						/>
					</div>
					<div className='form-group'>
						<label>Description: </label>
						<textarea
							type='text'
							className='form-control'
							value={this.state.job_description}
							onChange={this.onChangeJobDescription}
						/>
					</div>

					<div className='form-group'>
						<input
							type='submit'
							value='Create Job'
							className='btn btn-primary'
						/>
					</div>
				</form>
			</div>
		);
	}
}
