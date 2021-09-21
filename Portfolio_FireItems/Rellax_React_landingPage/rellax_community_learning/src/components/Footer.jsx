import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
const Wrapper = styled.div`
	padding: 10px 50px;
	margin-top: 1px;
	background-color: #2e2356;
`;

const ItemContainer = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${mobile({ flexDirection: 'column' })}
`;

const Item = styled.li`
	color: white;
	font-size: 12px;
	cursor: pointer;
	${mobile({ marginBottom: '15px', fontSize: '18px' })}
`;

const Footer = () => {
	return (
		<Wrapper>
			<ItemContainer>
				<Item>FAQ</Item>
				<Item>Terms of Use</Item>
				<Item>Primary Notice</Item>
				<Item>Contact Us</Item>
				<Item>About Us</Item>
			</ItemContainer>
		</Wrapper>
	);
};

export default Footer;
