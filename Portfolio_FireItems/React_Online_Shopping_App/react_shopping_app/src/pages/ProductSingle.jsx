import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

const Container = styled.div``;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
`;

const ImgContainer = styled.div`
	flex: 1;
`;

const Image = styled.img`
	width: 100%auto;
	height: 90vh;
	object-fit: cover;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Desc = styled.p`
	margin: 20px 0px;
`;

const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
`;

const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
	margin-right: 20px;
`;

const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
`;

const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	display: flex;
	width: 50%;
	justify-content: space-between;
	align-items: center;
`;
const QuantityContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* width: 40%; */
	font-weight: 700;
`;

const Quantity = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0px 5px;
`;

const Button = styled.button`
	padding: 15px;
	font-weight: 500;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	&:hover {
		background-color: #f8f4f4;
	}
`;

const ProductSingle = () => {
	return (
		<Container>
			<Announcement />;
			<Navbar />
			<Wrapper>
				<ImgContainer>
					<Image src='https://i.ibb.co/S6qMxwr/jean.jpg'></Image>
				</ImgContainer>
				<InfoContainer>
					<Title></Title>
					<Desc>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
						enim labore eaque in voluptas repudiandae ipsa architecto quam
						nostrum, iste velit assumenda optio ullam dolores sequi quibusdam
						debitis fuga. Labore quas laboriosam vero autem laborum illum,
						soluta repellat temporibus necessitatibus exercitationem itaque nam
						delectus dolorem cum praesentium debitis aut a!
					</Desc>
					<Price>$ 20</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color:</FilterTitle>
							<FilterColor color='Black'></FilterColor>
							<FilterColor color='orange'></FilterColor>
							<FilterColor color='Gray'></FilterColor>
						</Filter>
						<Filter>
							<FilterTitle>Size:</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<QuantityContainer>
							<RemoveOutlinedIcon />
							<Quantity>1</Quantity>
							<AddOutlinedIcon />
						</QuantityContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductSingle;
