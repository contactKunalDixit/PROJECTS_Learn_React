import styled from 'styled-components';
import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Guylaptop from '../components/assets/guylaptop.png';

const Wrapper = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: calc(100vh - 70px);
	margin-top: 70px;
`;

const MainSec = styled.div`
	width: 100%;
	display: flex;
	height: 80%;
`;

const Left = styled.div`
	flex: 1;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-content: center;
	padding-left: 2%;
	padding-right: 2%;
`;

const ImgContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	float: right;
	max-width: 700px;
	width: 100%;
`;
const Image = styled.img`
	border-radius: 4%;
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const Right = styled.div`
	flex: 1;
`;

const RightSecWrapper = styled.div`
	width: 100%;
	height: 100%;
	padding-left: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Greeting = styled.h1`
	font-size: 60px;
	margin: 10px 0;
`;

const SubGreeting1 = styled.h2`
	font-size: 40px;
`;

const SubGreeting2 = styled.h3`
	font-size: 30px;
`;

const Intro = () => {
	const textRef = useRef();
	useEffect(() => {
		init(textRef.current, {
			showCursor: true,
			typeSpeed: 100,
			backspeed: 50,
			backDelay: 1500,
			strings: ['Designer', 'Developer', 'Creator', 'Curator', 'Facilitator'],
		});
	}, []);

	return (
		<Wrapper>
			<MainSec>
				<Left>
					<ImgContainer>
						<Image src={Guylaptop}></Image>
					</ImgContainer>
				</Left>
				<Right>
					<RightSecWrapper>
						<Greeting>Hi..</Greeting>
						<SubGreeting1>I am Kunal Dixit</SubGreeting1>
						<SubGreeting2>
							Content <span ref={textRef}></span>
						</SubGreeting2>
					</RightSecWrapper>
				</Right>
			</MainSec>

			<KeyboardArrowDownIcon
				style={{ fontSize: '50px', marginTop: '30px', cursor: 'pointer' }}
			/>
		</Wrapper>
	);
};

export default Intro;
