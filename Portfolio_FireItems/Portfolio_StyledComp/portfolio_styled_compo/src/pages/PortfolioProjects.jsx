import React from 'react';
import styled from 'styled-components';
import picImage from '../components/assets/Coding.jpg';
// import SwipeReactJS from '../components/SwipeReactJS';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

export function SwipeReactJS() {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={3}
			centeredSlides='true'
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide></SwiperSlide>
			<SwiperSlide></SwiperSlide>
			<SwiperSlide></SwiperSlide>
			<SwiperSlide></SwiperSlide>
		</Swiper>
	);
}

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
const Title = styled.h1`
	font-size: 50px;
	font-weight: 400;
`;
const Container = styled.div`
	-webkit-box-shadow: 0px 0px 17px 5px rgba(12, 7, 8, 0.57);
	box-shadow: 0px 0px 17px 5px rgba(44, 2, 10, 0.57);
	width: 90%;
	height: 60vh;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	/* flex-direction: column; */
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
			<TitleBox>
				<Title>Projects</Title>
			</TitleBox>

			<Container>
				<SwipeReactJS>
					<PicImage src={picImage}></PicImage>
					<Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
						consectetur harum tempora nostrum modi vel labore ratione corporis
						fugit, natus id error in, ducimus deleniti. Doloremque hic saepe
						sequi numquam totam explicabo soluta rerum rem, asperiores corporis
						repellat dolore distinctio a nostrum quod magnam! Quo eos libero
						inventore sapiente dignissimos.
					</Description>
					<TechUsed>
						<PicImage src={picImage}></PicImage>
					</TechUsed>
				</SwipeReactJS>
			</Container>
		</Wrapper>
	);
};

export default PortfolioProjects;
