import React from 'react';
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import HomeContainer from '../../components/homeContainer/HomeContainer';
const Home = () => {
	return (
		<div className='home'>
			<Navbar></Navbar>
			<Sidebar></Sidebar>
			<HomeContainer></HomeContainer>
		</div>
	);
};

export default Home;
