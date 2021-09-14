import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../data';

const Container = styled.div`
	display: flex;
	padding: 20px;
	flex-wrap: wrap;
	justify-content: center;
`;

const Title = styled.h1`
	font-weight: 200;
	font-size: 36px;
`;

const SubContainer = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const Products = () => {
	return (
		<Container>
			<Title>Crazy Deals</Title>
			<SubContainer>
				{popularProducts.map((item) => (
					<Product item={item} key={item.id}></Product>
				))}
			</SubContainer>
		</Container>
	);
};

export default Products;
