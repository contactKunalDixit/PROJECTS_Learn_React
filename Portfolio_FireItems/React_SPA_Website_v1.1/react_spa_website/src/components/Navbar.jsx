import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 50px;
	background-color: ${(props) => props.bgCol};
	display: flex;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 100%;
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
`;

const Right = styled.div`
	width: 30%;
	display: flex;
	justify-content: flex-end;
`;

const Logo = styled.span`
	font-weight: bold;
	text-decoration: underline crimson;
	margin-right: 30px;
`;

const MenuGroup = styled.ul`
	display: flex;
	list-style-type: none;
	align-items: center;
	padding-left: 0;
	margin-left: 30px;
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;

const MenuItem = styled.li`
	margin-right: 20px;
	font-size: 18px;
	font-weight: 400;
	color: #696868;
	cursor: pointer;
`;

const Button = styled.button`
	padding: 5px 10px;
	cursor: pointer;
	border-radius: 10px;
	border: 2px solid rgb(255, 255, 255);
	background-color: crimson;
	color: white;

	&:hover {
		background-color: rgb(13, 44, 100);
		color: white;
	}
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Logo>
						<h1>DigiHut.</h1>
					</Logo>
					<MenuGroup>
						<MenuItem>Home</MenuItem>
						<MenuItem>Features</MenuItem>
						<MenuItem>Services</MenuItem>
						<MenuItem>Pricing</MenuItem>
						<MenuItem>Contact</MenuItem>
					</MenuGroup>
				</Left>
				<Right>
					<Button>JOIN TODAY</Button>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
