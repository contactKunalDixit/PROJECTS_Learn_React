import React from 'react';
import styled, { css } from 'styled-components';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Feature from './components/Feature';
import Service from './components/Service';
import Price from './components/Price';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Container = styled.div`
	height: 100vh;
	overflow: hidden;
	position: relative;
`;

const Shape = css`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
`;

const IntroShape = styled.div`
	${Shape}
	clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
	background-color: #264653;
`;

const FeatureShape = styled.div`
	${Shape}
	clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
	background-color: #2a9d8f;
`;

const ServiceShape = styled.div`
	${Shape}
	clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
	background-color: #e9c46a;
`;

const PriceShape = styled.div`
	${Shape}
	clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
	background-color: #f4a261;
`;
const ContactShape = styled.div`
	${Shape}
	clip-path: polygon(67% 0, 100% 0, 100% 100%, 67% 100%);
	background-color: #e76f51;
`;

const App = () => {
	const smallScreen = window.screen.width <= 480 ? true : false;
	return (
		<>
			<Container>
				<Navbar />
				<Intro />
				<IntroShape />
			</Container>
			<Container>
				<Feature></Feature>
				<FeatureShape />
			</Container>
			<Container>
				<Service></Service>
				{!smallScreen && <ServiceShape />}
			</Container>
			<Container>
				<Price></Price>
				<PriceShape />
			</Container>
			<Container>
				<Contact></Contact>
				<Footer></Footer>
				<ContactShape />
			</Container>
		</>
	);
};

export default App;
