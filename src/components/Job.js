import React from 'react';
import { Link } from 'react-router-dom';

function Job(props) {
	return (
		<tr>
			<td>{props.job.job_company}</td>
			<td>{props.job.job_position}</td>
			<td>{props.job.job_location}</td>
			<td>{props.job.job_description}</td>
			<td>{props.job.job_applied_date}</td>
			<td>
				<Link to={'/edit/' + props.job._id}>Edit</Link>
			</td>
			<td>
				<button
					type='button'
					className='btn btn-danger'
					onClick={() => {
						props.deleteJob(props.job._id);
					}}
				>
					Delete
				</button>
			</td>
		</tr>
	);
}

export default Job;
