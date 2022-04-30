import React from 'react';
import './single.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ListContainer from '../../components/list_Container/ListContainer';
import UserChart from '../../components/chart_Single_User/UserChart';
import UserFeaturedDP from '../../components/chart_Single_User/User_FeaturedDP';

const Single = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Sidebar></Sidebar>
			<div className='homeContainer'>
				<div className='wrapper_homeContainer'>
					<div className='homeContainer_Charts'>
						<UserFeaturedDP></UserFeaturedDP>
						<UserChart></UserChart>
					</div>
					<div className='listContainer_SinglePage'>
						<ListContainer></ListContainer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Single;
