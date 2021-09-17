import React from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LovelyBees from '../Img/lovely-bees.png';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { mobile } from '../components/responsive';

const Container = styled.div`
	height: 60px;
	${mobile({ height: '120px', marginBottom: '15px' })}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	${mobile({
		padding: '10px 0px;',
		flexDirection: 'Column',
		justifyContent: 'center;',
		alignItems: 'center',
	})}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	${mobile({
		display: 'flex',
		justifyContent: 'center',
	})}
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: 'none' })}
`;
const SearchContainer = styled.div`
	border: 0.5px solid gray;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
	border-radius: 10px;
	${mobile({ marginLeft: '-25px' })}
`;

const Input = styled.input`
	border: none;
	/* ${mobile({ width: '50px' })} */
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
	${mobile({ fontSize: '38px' })}
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
	${mobile({ flex: '2', justifyContent: 'space-between' })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin: 0px 25px;
	${mobile({
		fontSize: '18px',
		// marginLeft: '10px',
	})}
`;

const Navbar = () => {
	return (
		<>
			<Container>
				<Wrapper>
					<Left>
						<Language>EN</Language>
						<SearchContainer>
							<Input placeholder='search' />
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
