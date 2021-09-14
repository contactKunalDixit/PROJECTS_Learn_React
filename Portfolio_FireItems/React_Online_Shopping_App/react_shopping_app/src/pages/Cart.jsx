import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div``;
const Wrapper = styled.div``;

const Cart = () => {
	return (
		<Container>
			<Navbar></Navbar>
			<Announcement></Announcement>
			<Wrapper>
				<Title>Your Bag</Title>

				<Top>
					<TopButton>Continue Shopping</TopButton>
					<TopTexts>
						<TopText>Shopping Bag (2)</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</TopTexts>
					<TopButton type='filled'>Checkout Now</TopButton>
				</Top>
				<Bottom>
					<Info></Info>
					<Summary></Summary>
				</Bottom>
			</Wrapper>
			<Footer></Footer>
		</Container>
	);
};

export default Cart;
