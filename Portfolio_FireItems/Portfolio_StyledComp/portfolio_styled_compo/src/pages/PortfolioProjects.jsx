import React from 'react';
import styled from 'styled-components';
// import picImage from '../components/assets/Coding.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, {
	Navigation,
	Lazy,
	Pagination,
	Scrollbar,
	A11y,
} from 'swiper';
import 'swiper/swiper.scss';
import { AddIcon } from '@material-ui/icons/Add';

const Wrapper = styled.div`
	width: 100vw;
	height: calc(100vh - 50px);
	/* height: 90vh; */
	/* margin-top: 50px; */
	/* background-color: red; */
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

const WrapperHeader = styled.h1`
	font-size: 48px;
	font-weight: 400;
	margin: 20px 0;
`;
const Container = styled.div`
	-webkit-box-shadow: 0px 0px 17px 5px rgba(12, 7, 8, 0.57);
	box-shadow: 0px 0px 17px 5px rgba(44, 2, 10, 0.57);
	width: 90%;

	padding: 20px;
	margin-top: 10px;
	display: flex;
	justify-content: center;
	align-items: center;

	/* background-color: pink; */
`;
const ItemBox = styled.div`
	width: 305px;
	height: 400px;
	/* background-color: #9393d3; */
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	padding: 10px;
`;

const ProjectSnapShot = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const PicImage = styled.img`
	max-width: 300px;
	object-fit: cover;
	/* flex: 1; */
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Description = styled.div`
	/* flex: 2; */
	width: 300px;
	margin: 10px;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
`;
const ItemBoxHeader = styled.h3`
	font-size: 20px;
	font-weight: 400;
	margin: 15px 0;
`;
const ProjSummary = styled.p`
	font-size: 14px;
	/* text-align: center; */
`;

const data = [
	{
		id: '1',
		picImage:
			'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
		title: 'Proj 1',
		projSummary:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, molestiae accusamus enim saepe esse quibusdam corporis vel placeat iste maxime quos laboriosa',
	},
	{
		id: '2',
		picImage:
			'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
		title: 'Proj 2',
		projSummary:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, molestiae accusamus enim saepe esse quibusd',
	},
	{
		id: '3',
		picImage:
			'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
		title: 'Proj 3',
		projSummary:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, molestiae accusamus enim saepe esse quibusdam corporis vel placeat iste maxime qsan',
	},
	{
		id: '4',
		picImage:
			'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
		title: 'Proj 4',
		projSummary:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, molestiae accusamus enim saepe esse quibu',
	},
];

SwiperCore.use([Navigation, Pagination]);
const SwipeReactJS = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={30}
			navigation={true}
			lazy={true}
			loop={true}
			pagination={{ clickable: true }}
			slidesPerView={'auto'}
			centeredSlides={true}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			breakpoints={{
				340: {
					slidesPerView: 1,
					spaceBetween: 100,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 50,
				},
			}}
		>
			{data.map((user) => (
				<SwiperSlide key={user.id}>
					<ItemBox>
						<ProjectSnapShot>
							<PicImage src={user.picImage}></PicImage>
						</ProjectSnapShot>

						<Description>
							<ItemBoxHeader>{user.title}</ItemBoxHeader>
							<ProjSummary>{user.projSummary}</ProjSummary>
						</Description>
					</ItemBox>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

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

export default PortfolioProjects;
