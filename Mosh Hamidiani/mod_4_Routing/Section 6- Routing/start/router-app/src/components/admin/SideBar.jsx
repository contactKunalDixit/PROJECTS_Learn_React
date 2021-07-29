import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
	return (
		<ul>
			<li>
				<Link to='/admin/users'>Admin</Link>
			</li>
			<li>
				<Link to='/admin/posts'>Users</Link>
			</li>
		</ul>
	);
};

export default SideBar;
