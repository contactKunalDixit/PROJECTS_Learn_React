import React from 'react';
import styled from 'styled-components';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

const Container = styled.div`
	width: 100%;
	/* height: calc(100vh - 90px); */
	height: 100vh;
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
	z-index: 100;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
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
`;

const Slider = () => {
	return (
		<Container>
			<Arrow direction='Left'>
				<ArrowBackIosOutlinedIcon style={{ color: 'black' }} />
			</Arrow>
			<Wrapper>
				<SlideContainer bg='f5fafd'>
					<ImgContainer>
						<Image src='https://i.ibb.co/XsdmR2c/1.png' />
					</ImgContainer>
					<InfoContainer>
						<Title>Summer Sale</Title>
						<Desc>
							DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF ON NEW ARRIVALS
						</Desc>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</SlideContainer>
				<SlideContainer bg='fcf1ed'>
					<ImgContainer>
						<Image src='https://i.ibb.co/XsdmR2c/1.png' />
					</ImgContainer>
					<InfoContainer>
						<Title>Winter Sale</Title>
						<Desc>
							DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF ON NEW ARRIVALS
						</Desc>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</SlideContainer>
				<SlideContainer bg='fbf0f4'>
					<ImgContainer>
						<Image src='https://i.ibb.co/XsdmR2c/1.png' />
					</ImgContainer>
					<InfoContainer>
						<Title>Popular Sale</Title>
						<Desc>
							DON'T COMPROMISE ON STYLE! GET FLAT 50% OFF ON NEW ARRIVALS
						</Desc>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</SlideContainer>
			</Wrapper>
			<Arrow direction='Right'>
				<ArrowForwardIosOutlinedIcon style={{ color: 'black' }} />
			</Arrow>
		</Container>
	);
};

export default Slider;
