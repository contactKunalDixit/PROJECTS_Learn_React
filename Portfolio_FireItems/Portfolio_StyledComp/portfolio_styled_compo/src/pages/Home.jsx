import React from 'react';
import Navbar from '../components/Navbar';
import Intro from './Intro';
import PortfolioProjects from './PortfolioProjects';
import AboutMe from './AboutMe';
import Testimonials from './Testimonials';
import ContactMe from './ContactMe';

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
			<Intro />
			<PortfolioProjects />
			{/* <AboutMe /> */}
			{/* <Testimonials /> */}
			{/* <ContactMe></ContactMe> */}
		</Wrapper>
	);
};

export default Home;
