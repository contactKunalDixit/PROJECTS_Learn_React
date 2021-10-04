import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	width: 100vw;
	height: 8vh;
`;

const Left = styled.div`
	flex: 1;
	padding: 10px;
`;

const Right = styled.div`
	flex: 3;
	background-color: red;
	padding: 10px;
`;

const Navbar = () => {
	return (
		<>
			<Wrapper>
				<Left>
					LEft
					<Logo></Logo>
					<LogoName></LogoName>
				</Left>

				<Right>Right</Right>
			</Wrapper>
		</>
	);
};

export default Navbar;
