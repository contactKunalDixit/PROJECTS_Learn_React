import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
class NavBar extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<nav className='navbar navbar-expand-lg navbar-light bg-light'>
					<div className='container-fluid'>
						<Link className='navbar-brand' to='/'>
							Vidly
						</Link>

						<NavLink className='nav-link active' aria-current='page' to='#'>
							Movies
						</NavLink>
						<NavLink className='nav-link' to='#'>
							Customers
						</NavLink>
						<NavLink className='nav-link' to='#'>
							Rentals
						</NavLink>
					</div>
				</nav>
			</React.Fragment>
		);
	}
}

export default NavBar;
