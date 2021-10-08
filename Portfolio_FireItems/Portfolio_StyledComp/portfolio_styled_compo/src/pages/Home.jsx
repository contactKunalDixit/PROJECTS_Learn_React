import React from 'react';
import Navbar from '../components/Navbar';
import Intro from './Intro';
import PortfolioProjects from './PortfolioProjects';
import AboutMe from './AboutMe';
import Testimonials from './Testimonials';
import ContactMe from './ContactMe';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin: 0px;
	padding: 0px;
	position: relative;
	overflow: hidden;
`;

const Home = () => {
	return (
		<Wrapper>
			<Navbar />
			<Switch>
				<Route path='/Projects'>
					<PortfolioProjects />
				</Route>
				<Route path='/AboutMe'>
					<AboutMe />
				</Route>
				<Route path='/Testimonials'>
					<Testimonials />
				</Route>
				<Route path='/ContactMe'>
					<ContactMe />
				</Route>
				<Route path='/'>
					<Intro />
				</Route>
			</Switch>
		</Wrapper>
	);
};

export default Home;
