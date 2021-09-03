import React from 'react';
import styled from 'styled-components';
import Woman from '../Img/surprised-young-asia_success.png';
import AnimatedShapes from './AnimatedShapes';

const IntroContainer = styled.div`
	height: calc(100vh - 50px);
	display: flex;
	padding: 20px;
`;

const Left = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	font-size: 60px;
	width: 70%;
`;

const Desc = styled.p`
	width: 70%;
	margin-top: 20px;
`;

const Info = styled.div`
	width: 60%;
	margin-top: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
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
`;

const Contact = styled.div`
	display: flex;
	flex-direction: column;
`;

const Phone = styled.p`
	color: rgb(201, 49, 75);
	font-weight: bold;
`;

const PhoneText = styled.p`
	color: grey;
	margin-top: 5px;
`;

const Right = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img`
	width: 100%;
	margin-left: 50px;
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
