import React from 'react';
import styled from 'styled-components';
import ImportantDevicesTwoToneIcon from '@mui/icons-material/ImportantDevicesTwoTone';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Wrapper = styled.div`
	width: 100vw;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;

	/* padding: 10px 0; */
`;

const Container = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
`;

const Left = styled.div`
	flex: 1;
	padding: 10px;
	height: 100%;
	background-color: #e5e1f3;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LogoText = styled.span`
	font-size: 24px;
	font-weight: 500;
	margin: 10px;
`;
const Center = styled.div`
	flex: 5.5;
	background-color: #e1dcf5;
	padding: 10px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NavItems = styled.ul`
	padding: 0 50px;
	width: 100%;

	list-style: none;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;
const Item = styled.li`
	cursor: pointer;
	font-size: 18px;
	font-weight: 500;
	transition: all 0.5s ease;
	&:hover {
		transform: scale(1.2, 1.2);
	}
`;

const Right = styled.div`
	flex: 0.5;
	background-color: #ded7fa;
	padding: 10px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Navbar = () => {
	return (
		<>
			<Wrapper>
				<Container>
					<Left>
						<ImportantDevicesTwoToneIcon
							fontSize='large'
							style={{ margin: '10px' }}
						/>
						<LogoText>KunalD.</LogoText>
					</Left>

					<Center>
						<NavItems>
							<Item>Home</Item>
							<Item>Projects</Item>
							<Item>Testiomonials</Item>
							<Item>About Me</Item>
							<Item>Contact</Item>
						</NavItems>
					</Center>
					<Right>
						<DarkModeIcon
							style={{
								cursor: 'pointer',
								transition: 'all 0.5s ease',
								'& :hover': { transform: 'scale(1.3)' },
							}}
						></DarkModeIcon>
					</Right>
				</Container>
			</Wrapper>
		</>
	);
};

export default Navbar;
