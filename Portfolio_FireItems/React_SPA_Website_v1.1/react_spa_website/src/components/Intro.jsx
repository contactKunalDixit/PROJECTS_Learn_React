import React from 'react';
import styled from 'styled-components';
import Woman from '../Img/surprised-young-asia_success.png';
import AnimatedShapes from './AnimatedShapes';

const IntroContainer = styled.div`
	height: calc(100vh - 50px);
	display: flex;
	padding: 20px;
	@media only screen and (max-width: 480px) {
		flex-direction: column;
	}
`;

const Left = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 480px) {
		width: 100%;
		height: 100%;
	}
`;

const Title = styled.h1`
	width: 60%;
	font-size: 60px;
	@media only screen and (max-width: 480px) {
		width: 100%;
		font-size: 50px;
	}
`;

const Desc = styled.p`
	width: 70%;
	margin-top: 20px;
	font-size: 20px;
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Info = styled.div`
	width: 60%;
	margin-top: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media only screen and (max-width: 480px) {
		width: 100%;
		flex-direction: column;
	}
`;

const InfoButton = styled.button`
	padding: 15px;
	background-color: darkblue;
	color: white;
	border-radius: 10px;
	font-weight: bold;
	border: none;
	letter-spacing: 2px;
	cursor: pointer;
	&:hover {
		background-color: cyan;
		color: black;
	}
	@media only screen and (max-width: 480px) {
		margin-bottom: 20px;
	}
`;

const Contact = styled.div`
	display: flex;
	flex-direction: column;
`;

const Phone = styled.p`
	color: rgb(201, 49, 75);
	font-weight: bold;
	@media only screen and (max-width: 480px) {
		color: black;
	}
`;

const PhoneText = styled.p`
	color: grey;
	margin-top: 5px;
	@media only screen and (max-width: 480px) {
		color: black;
	}
`;

const Right = styled.div`
	width: 40%;
	/* display: flex;
	justify-content: center; */
	/* align-items: center; */
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;

const Image = styled.img`
	width: 110%;
	margin-left: 10px;
	margin-top: 80px;
`;

const Intro = () => {
	return (
		<IntroContainer>
			<Left>
				<Title>Adventures in creative age</Title>
				<Desc>
					We believe that designing products and services in close partnership
					with our clients is the only way to have a real impact on thier
					business
				</Desc>
				<Info>
					<InfoButton>Start a Project</InfoButton>
					<Contact>
						<Phone>Call us at (012) 345 - 6789</Phone>
						<PhoneText>For any question or concerns</PhoneText>
					</Contact>
				</Info>
			</Left>
			<Right>
				<Image src={Woman}></Image>{' '}
				{/* modify the image ...smooth the rough edges throug GIMP */}
			</Right>
			<AnimatedShapes></AnimatedShapes>
		</IntroContainer>
	);
};

export default Intro;
