import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div`
	/* width: 100vw;
	height: 90vw; */
`;
const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; ;
`;
const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;
const Top = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`;
const TopButton = styled.button`
	padding: 10px;
	cursor: pointer;
	border: ${(props) => props.type === 'filled' && 'none'};
	background-color: ${(props) =>
		props.type === 'filled' ? 'black' : 'transparent'};
	color: ${(props) => props.type === 'filled' && 'white'};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`;
const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Info = styled.div`
	flex: 3;
`;
const Summary = styled.div`
	flex: 2;
`;

const Cart = () => {
	return (
		<Container>
			<Announcement></Announcement>
			<Navbar></Navbar>

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
					<Info>
						<Product>
							<ProductDetail>
								<Image src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A' />
								<Details>
									<ProductName>
										<b>Product:</b> JESSIE THUNDER SHOES
									</ProductName>
									<ProductId>
										<b>ID:</b> 93813718293
									</ProductId>
									<ProductColor color='black' />
									<ProductSize>
										<b>Size:</b> 37.5
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$ 30</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
						<Product>
							<ProductDetail>
								<Image src='https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png' />
								<Details>
									<ProductName>
										<b>Product:</b> HAKURA T-SHIRT
									</ProductName>
									<ProductId>
										<b>ID:</b> 93813718293
									</ProductId>
									<ProductColor color='gray' />
									<ProductSize>
										<b>Size:</b> M
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>1</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$ 20</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ 80</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$ 5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type='total'>
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$ 80</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer></Footer>
		</Container>
	);
};

export default Cart;
