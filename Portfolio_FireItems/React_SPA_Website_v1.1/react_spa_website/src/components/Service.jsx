import React from 'react';
import styled from 'styled-components';
import Woman from '../Img/woman_Yellow_Wall.jpg';

const ServiceContainer = styled.div`
	display: flex;
	height: 100vh;
`;

const Left = styled.div`
	width: 50%;
	background-color: aqua;
`;

const Right = styled.div`
	width: 50%;
`;
const Image = styled.img`
	width: 100%;
`;

const Service = () => {
	return (
		<ServiceContainer>
			<Left>
				<Image src={Woman}></Image>
			</Left>
			<Right>Right</Right>
		</ServiceContainer>
	);
};

export default Service;
