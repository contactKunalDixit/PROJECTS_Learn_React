import React from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LovelyBees from '../Img/lovely-bees.png';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Container = styled.div`
	height: 60px;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
`;
const SearchContainer = styled.div`
	border: 0.5px solid gray;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
	border-radius: 10px;
`;

const Input = styled.input`
	border: none;
`;

const Center = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Logo = styled.h1`
	font-weight: 400;
	font-family: 'Caveat', cursive;
	font-size: 48px;
`;

const LogoIcon = styled.img`
	width: 60px;
	height: 60px;
	position: relative;
	bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin: 0px 25px;
`;

const Navbar = () => {
	return (
		<>
			<Container>
				<Wrapper>
					<Left>
						<Language>EN</Language>
						<SearchContainer>
							<Input />
							<SearchOutlinedIcon style={{ fontSize: '16px', color: 'grey' }} />
						</SearchContainer>
					</Left>
					<Center>
						<Logo>BuyBee</Logo>

						<LogoIcon src={LovelyBees}></LogoIcon>
					</Center>
					<Right>
						<MenuItem>Register</MenuItem>
						<MenuItem>Sign In</MenuItem>
						<MenuItem>
							<Badge badgeContent={4} color='primary'>
								<ShoppingCartOutlinedIcon />
							</Badge>
						</MenuItem>
					</Right>
				</Wrapper>
			</Container>
		</>
	);
};

/* create a Credit footer on the last page :
 PLEASE give credit to author for using the 'Bee' icon:

 <a href='https://lovepik.com/images/png-animals.html'>
Animals Png vectors by Lovepik.com
</a> */

export default Navbar;
