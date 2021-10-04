import React from 'react';
import Navbar from '../components/Navbar';
import Intro from './Intro';
import PortfolioProjects from './PortfolioProjects';
import AboutMe from './AboutMe';
import Testimonials from './Testimonials';
import ContactMe from './ContactMe';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Intro />
			<PortfolioProjects />
			<AboutMe />
			<Testimonials />
			<ContactMe></ContactMe>
		</div>
	);
};

export default Home;
