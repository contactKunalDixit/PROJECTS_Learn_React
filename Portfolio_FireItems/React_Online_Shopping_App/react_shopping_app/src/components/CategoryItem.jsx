import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	flex: 1;
	margin: 3px;
	min-width: 300px;
	height: 80vh;
	position: relative;
	transition: all 0.5s ease;
	&:hover {
		transform: scale(1.02);
	}
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Title = styled.h1`
	color: white;
	margin-bottom: 20px; ;
`;
const Button = styled.button`
	border: none;
	padding: 10px;
	background-color: white;
	color: grey;
	cursor: pointer;
	font-weight: 600;
	font-size: 16px; ;
`;

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Image src={item.img}></Image>
			<Info>
				<Title>{item.title}</Title>
				<Button>SHOP NOW</Button>
			</Info>
		</Container>
	);
};

export default CategoryItem;
