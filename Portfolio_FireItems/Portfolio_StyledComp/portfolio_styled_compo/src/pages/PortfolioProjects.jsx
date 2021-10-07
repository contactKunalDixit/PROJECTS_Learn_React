import React from 'react';
import styled from 'styled-components';
import picImage from '../components/assets/Coding.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import { AddIcon } from '@material-ui/icons/Add';

const Wrapper = styled.div`
	width: 100vw;
	height: calc(100vh - 50px);
	/* height: 90vh; */
	margin-top: 50px;
	background-color: red;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const TitleBox = styled.div`
	/* width: 100%; */
`;
const WrapperHeader = styled.h1`
	font-size: 50px;
	font-weight: 400;
`;
const Container = styled.div`
	-webkit-box-shadow: 0px 0px 17px 5px rgba(12, 7, 8, 0.57);
	box-shadow: 0px 0px 17px 5px rgba(44, 2, 10, 0.57);
	width: 90%;
	height: 70vh;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	/* flex-direction: column; */
	background-color: pink;
`;
const ItemBox = styled.div`
	width: 350px;
	height: 500px;
	background-color: #9393d3;
	display: 'flex';
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
`;

const ProjectSnapShot = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const PicImage = styled.img`
	max-width: 250px;
	object-fit: cover;
	/* flex: 1; */
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Description = styled.div`
	/* flex: 2; */
	width: 350px;
	margin: 10px 0;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const ItemBoxHeader = styled.h3`
	font-size: 20px;
	font-weight: 400;
`;
const ProjSummary = styled.p`
	font-size: 14px;
`;
const TechUsed = styled.div`
	/* flex: 2; */
	width: 350px;
	object-fit: contain;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PortfolioProjects = () => {
	return (
		<Wrapper>
			{/* <TitleBox> */}
			<WrapperHeader>Projects</WrapperHeader>
			{/* </TitleBox> */}

			<Container>
				<SwipeReactJS></SwipeReactJS>
			</Container>
		</Wrapper>
	);
};

const SwipeReactJS = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={3}
			centeredSlides='false'
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide>
				<ItemBox>
					<ProjectSnapShot>
						<PicImage src={picImage}></PicImage>
					</ProjectSnapShot>

					<Description>
						<ItemBoxHeader>Proj1</ItemBoxHeader>
						<ProjSummary>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consequatur consectetur harum tempora nostrum modi vel labore
							ratione corporis fugit, natus id error in, ducimus deleniti.
							Doloremque hic saepe sequi numquam totam explicabo soluta rerumm!
							Quo eos libero inventore sapiente dignissimos.
						</ProjSummary>
					</Description>
					<TechUsed>
						<PicImage src={picImage}></PicImage>
					</TechUsed>
				</ItemBox>
			</SwiperSlide>
			<SwiperSlide>
				<ItemBox>Slide 2</ItemBox>
			</SwiperSlide>
			<SwiperSlide>
				<ItemBox>Slide 3</ItemBox>
			</SwiperSlide>
			<SwiperSlide>
				<ItemBox>Slide 4</ItemBox>
			</SwiperSlide>
		</Swiper>
	);
};

export default PortfolioProjects;
