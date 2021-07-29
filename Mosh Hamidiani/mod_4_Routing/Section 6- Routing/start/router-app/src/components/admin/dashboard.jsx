import React from 'react';
import Users from './users';
import Posts from './posts';
import { Redirect, Route, Switch } from 'react-router-dom';
import SideBar from './SideBar';
const Dashboard = ({ match }) => {
	return (
		<div>
			<h1>Admin Dashboard</h1>
			<SideBar></SideBar>
			<Switch>
				<Route path='/admin/users' component={Users}></Route>
				<Route path='/admin/posts' component={Posts}></Route>
			</Switch>
		</div>
	);
};

export default Dashboard;
