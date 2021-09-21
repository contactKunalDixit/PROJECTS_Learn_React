import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Play from '../Images/play-button.png';
import Parallax from 'react-rellax';

import { mobile } from '../responsive';
// import VideoCameraFrontIcon from '@material-ui/icons/VideoCameraFrontOutlined';
// import GroupsOutlinedIcon from '@material-ui/icons/GroupsOutlinedIcon';
// import ShareOutlinedIcon from '@material-ui/icons/ShareOutlinedIcon';

// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
	width: 100%;
	background-color: #2e2356;
	${mobile({ overflow: 'hidden' })}
`;
const Top = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url('https://i.ibb.co/PhVR2Vh/bg1.png');
	background-size: contain;
	background-repeat: no-repeat;
`;

const TopLeft = styled.div`
	flex: 1.5;
	${mobile({ display: 'none' })}
`;

const TopRight = styled.div`
	flex: 2;
	${mobile({
		height: '100vh',
		marginTop: `20px`,
		width: '100vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	})}
`;
const Title = styled.h1`
	color: #${(props) => (props.color === 'white' ? `ffffff` : `f5a676`)};
	font-size: ${(props) => props.color === 'white' && `${props.size}`};
	font-weight: 400;
	/* letter-spacing: 1px; */
	margin: ${(props) => (props.color !== 'white' ? `10px` : `30px`)} 0px;
	opacity: 100%;

	${mobile({
		width: '90%',
		fontSize: '48px',
		margin: `20px auto`,
		textAlign: 'center',
	})}
`;
const ButtonTop = styled.button`
	width: 30%;
	padding: 10px;
	font-size: 14px;
	border-radius: 25px;
	cursor: pointer;

	margin-top: 50px;
	&&:hover {
		background-color: #f3aeae;
		transform: scale(0.95);
		transition: all 0.8s ease;
	}

	${mobile({
		width: '90%',
	})}
`;

const Middle = styled.div`
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	${mobile({
		// width: '90%',
		height: '100vh',
		flexDirection: 'column',
		justifyContent: 'space-around',
	})}
`;

const MiddleLeft = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	${mobile({
		marginBottom: '30px',
	})}
`;

const Image = styled.img`
	width: 50%;
	object-fit: cover;
	${mobile({
		width: '150px',
	})}
`;
const MiddleRight = styled.div`
	flex: 1;
	height: 80%;
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	align-items: center;
	${mobile({
		display: 'flex',
		height: 'auto',
	})}
`;
const SubSection = styled.div`
	opacity: 80%;
	border-radius: 5px;
	border: 1px solid #f3aeae;
	padding: 0 10px;
	margin: 20px 20px;
`;
const Desc = styled.p`
	color: white;
	${mobile({
		fontSize: '14px',
	})}
`;

const Bottom = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	/* height: 60vh; */
`;

const Home = () => {
	return (
		<>
			{/* <Parallax speed={-5}> */}
			<Container>
<<<<<<< HEAD
				<Top>
					<TopLeft></TopLeft>
					<TopRight>
						<Title color='white' size='60px' style={{ marginBottom: '50px' }}>
							Community Based Learning
						</Title>
						<ButtonTop>Learn More</ButtonTop>
					</TopRight>
				</Top>
=======
				<Parallax speed={-5}>
					<Top>
						<TopLeft></TopLeft>

						<TopRight>
							<Parallax speed={7}>
								<Title color='white' size='60px'>
									Community Based Learning
								</Title>
							</Parallax>
							<Parallax speed={5}>
								<ButtonTop>Learn More</ButtonTop>
							</Parallax>
						</TopRight>
					</Top>
				</Parallax>
>>>>>>> 26eb7020f4a5ab05b62bd8a55c26d5aba8ba5c12
				<Middle>
					<Parallax speed={0}>
						<MiddleLeft>
							<Image src={Play}></Image>
						</MiddleLeft>
					</Parallax>

					<MiddleRight>
						<Parallax speed={4}>
							<SubSection>
								<Title margin='10px'>Stream Everything</Title>
								<Desc>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corporis dolor neque distinctio suscipit ducimus, perferend
									margin-bottom: 35px;is incidunt odit maiores soluta? Dolorem
									ea iure reiciendis illum voluptas!
								</Desc>
							</SubSection>
						</Parallax>
						<Parallax speed={3}>
							<SubSection>
								<Title margin='10px'>Short is the New Long</Title>
								<Desc>
									Lorem ipsum dolor sit amet consectetur margin: '20px
									20px'adipisicing elit. Corporis dolor neque distinctio
									suscipit ducimus, perferendis incidunt odit maiores soluta?
									Dolorem ea iure reiciendis illum voluptas!
								</Desc>
							</SubSection>
						</Parallax>
					</MiddleRight>
				</Middle>

				<Bottom>
					<Parallax speed={1}>
						<SubSection>
<<<<<<< HEAD
							<Title margin='10px' style={{ fontSize: '32px' }}>
								Stream Everything
							</Title>
=======
							{/* <VideoCameraFrontIcon /> */}
							<Title>Watch</Title>
>>>>>>> 26eb7020f4a5ab05b62bd8a55c26d5aba8ba5c12
							<Desc>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
								ipsum dolor sit amet consectetur adipisicing elit. Velit,
								consequuntur.
							</Desc>
						</SubSection>
					</Parallax>
					<Parallax speed={2}>
						<SubSection>
<<<<<<< HEAD
							<Title margin='10px' style={{ fontSize: '32px' }}>
								Short is the New Long
							</Title>
=======
							{/* <GroupsOutlinedIcon /> */}
							<Title>Learn</Title>{' '}
>>>>>>> 26eb7020f4a5ab05b62bd8a55c26d5aba8ba5c12
							<Desc>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
								ipsum dolor sit amet consectetur adipisicing elit. Velit,
								consequuntur.
							</Desc>
						</SubSection>
<<<<<<< HEAD
					</MiddleRight>
				</Middle>
				<Bottom>
					<SubSection>
						{/* <VideoCameraFrontIcon /> */}
						<Title tyle={{ fontSize: '32px' }}>Watch</Title>
						<Desc>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Velit,
							consequuntur.
						</Desc>
					</SubSection>
					<SubSection>
						{/* <GroupsOutlinedIcon /> */}
						<Title style={{ fontSize: '32px' }}>Learn</Title>{' '}
						<Desc>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Velit,
							consequuntur.
						</Desc>
					</SubSection>
					<SubSection>
						{/* <ShareOutlinedIcon /> */}
						<Title style={{ fontSize: '32px' }}>Share</Title>{' '}
						<Desc>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Velit,
							consequuntur.
						</Desc>
					</SubSection>
=======
					</Parallax>
					<Parallax speed={3}>
						<SubSection>
							{/* <ShareOutlinedIcon /> */}
							<Title>Share</Title>{' '}
							<Desc>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
								ipsum dolor sit amet consectetur adipisicing elit. Velit,
								consequuntur.
							</Desc>
						</SubSection>
					</Parallax>
>>>>>>> 26eb7020f4a5ab05b62bd8a55c26d5aba8ba5c12
				</Bottom>
			</Container>
			<Footer></Footer>
			{/* </Parallax> */}
		</>
	);
};

export default Home;
