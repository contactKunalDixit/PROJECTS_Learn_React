import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

import { sliderItems } from '../data';

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 90px);
	/* height: 100vh; */
	display: flex;

	position: relative;
	overflow: hidden;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fcf4f4;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	position: absolute;
	top: 0;
	bottom: 0;
	margin: auto; /*For centering the arrows vertically: top, bottom:0 and margin:Auto*/
	left: ${(props) => props.direction === 'Left' && '10px'};
	right: ${(props) => props.direction === 'Right' && '10px'};
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
	transition: all 1.5s ease;
`;

const SlideContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
`;

const Image = styled.img`
	height: 80%;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 70px;
`;
const Desc = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 2px;
`;
const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	letter-spacing: 1px;
	cursor: pointer;

	&:hover {
		background-color: darkblue;
		color: white;
	}
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = (direction) => {
		if (direction === 'Left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};
	return (
		<Container>
			<Arrow direction='Left' onClick={() => handleClick('Left')}>
				<ArrowBackIosOutlinedIcon style={{ color: 'black' }} />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<SlideContainer bg={item.bg} key={item.id}>
						<ImgContainer>
							<Image src={item.img} />
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>SHOP NOW</Button>
						</InfoContainer>
					</SlideContainer>
				))}
			</Wrapper>
			<Arrow direction='Right' onClick={() => handleClick('Right')}>
				<ArrowForwardIosOutlinedIcon style={{ color: 'black' }} />
			</Arrow>
		</Container>
	);
};

export default Slider;
