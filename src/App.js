import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import CreateJob from './components/CreateJob';
import EditJob from './components/EditJob';
import JobList from './components/JobList';

class App extends Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<nav className='navbar navbar-expand-lg navbar-light bg-light'>
						<Link to='/' className='navbar-brand'>
							Job Journal
						</Link>
						<div className='collpase navbar-collapse'>
							<ul className='navbar-nav mr-auto'>
								<li className='navbar-item'>
									<Link to='/' className='nav-link'>
										Job List
									</Link>
								</li>
								<li className='navbar-item'>
									<Link to='/create' className='nav-link'>
										Create New Job
									</Link>
								</li>
							</ul>
						</div>
					</nav>
					<br />
					<Route path='/' exact component={JobList} />
					<Route path='/edit/:id' component={EditJob} />
					<Route path='/create' component={CreateJob} />
				</div>
			</Router>
		);
	}
}

export default App;
