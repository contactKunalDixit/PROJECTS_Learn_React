import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

const Container = styled.div`
	background-color: red;
	width: 100vw;
`;
const Top = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const LeftSec = styled.div`
	flex: 1;
	background-color: red;
`;
const RightSec = styled.div`
	flex: 2;
	background-color: #4118d4;
`;
const Middle = styled.div``;
const Bottom = styled.div``;

const Home = () => {
	return (
		<>
			<Container>
				<Top>
					<LeftSec>Heeeee</LeftSec>
					<RightSec>Haaaa</RightSec>
				</Top>
				<Middle>
					<LeftSec>Hello</LeftSec>
					<RightSec>World</RightSec>
				</Middle>
				<Bottom></Bottom>
			</Container>
			<Footer></Footer>
		</>
	);
};

export default Home;
