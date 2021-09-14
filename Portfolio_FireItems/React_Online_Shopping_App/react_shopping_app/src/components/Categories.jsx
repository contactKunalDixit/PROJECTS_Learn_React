import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	align-items: center;
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

const Categories = () => {
	return (
		<>
			<Container>
				<Title>Shop By Categories</Title>
				<SubContainer>
					{categories.map((item) => (
						<CategoryItem item={item} key={item.id} />
					))}
				</SubContainer>
			</Container>
		</>
	);
};

export default Categories;
