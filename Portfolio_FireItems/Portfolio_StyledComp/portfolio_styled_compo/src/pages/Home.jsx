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
	height: 100vh;
	margin: 0px;
	padding: 0px;
	position: relative;
`;

const Sections = styled.div`
	width: 100%;
	height: calc(100vh - 70px);
	/* background-color: lightsalmon; */
	position: relative;
	top: 70px;
	scroll-behavior: smooth;
	scroll-snap-type: y mandatory;
	scrollbar-width: none; //for firefox
	//for other browsers
	&::-webkit-scrollbar {
		display: none;
	}

	// For all the children element within(>*)..do
	> * {
		width: 100vw;
		height: calc(100vh - 70px);
		scroll-snap-align: start;
	}
`;

const Home = () => {
	return (
		<Wrapper>
			<Navbar />

			<Sections>
				{/* <Switch>
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
				</Switch> */}

				<Intro></Intro>
				<PortfolioProjects />
				<AboutMe />
				<ContactMe />
			</Sections>
		</Wrapper>
	);
};

export default Home;
