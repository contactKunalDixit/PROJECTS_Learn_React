import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 90vh;
	flex: 1;
	margin: 3px; ;
`;

const Image = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
`;

const Product = ({ item }) => {
	return (
		<Container>
			<Image src={item.img}></Image>
		</Container>
	);
};

export default Product;
