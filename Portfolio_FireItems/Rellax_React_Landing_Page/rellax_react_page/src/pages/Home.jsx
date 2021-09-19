import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Play from '../Images/play-button.png';

// import VideoCameraFrontIcon from '@material-ui/icons/VideoCameraFrontOutlined';
// import GroupsOutlinedIcon from '@material-ui/icons/GroupsOutlinedIcon';
// import ShareOutlinedIcon from '@material-ui/icons/ShareOutlinedIcon';

// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
	width: 100%;
	background-color: #2e2356;
`;
const Top = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url('https://i.ibb.co/PhVR2Vh/bg1.png');
	background-size: cover;
`;

const TopLeft = styled.div`
	flex: 1.5;
`;

const TopRight = styled.div`
	flex: 2;
`;
const Title = styled.h1`
	color: #${(props) => (props.color === 'white' ? `ffffff` : `f5a676`)};
	font-size: ${(props) => props.color === 'white' && `${props.size}`};
	font-weight: 400;
	/* letter-spacing: 1px; */
	margin: ${(props) => (props.color !== 'white' ? `10px` : `30px`)} 0px;
	opacity: 100%;
`;
const ButtonTop = styled.button`
	width: 20%;
	padding: 10px;
	font-size: 14px;
	border-radius: 5px;
	cursor: pointer;

	margin-top: 50px;
	&&:hover {
		background-color: #f3aeae;
		transform: scale(0.95);
		transition: all 0.8s ease;
	}
`;

const Middle = styled.div`
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const MiddleLeft = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img`
	width: 50%;
	object-fit: cover;
`;
const MiddleRight = styled.div`
	flex: 1;
	height: 80%;
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	align-items: center;
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
`;

const Bottom = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 60vh;
`;

const Home = () => {
	return (
		<>
			<Container>
				<Top>
					<TopLeft></TopLeft>
					<TopRight>
						<Title color='white' size='60px'>
							Community Based Learning
						</Title>
						<ButtonTop>Learn More</ButtonTop>
					</TopRight>
				</Top>
				<Middle>
					<MiddleLeft>
						<Image src={Play}></Image>
					</MiddleLeft>
					<MiddleRight>
						<SubSection>
							<Title margin='10px'>Stream Everything</Title>
							<Desc>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Corporis dolor neque distinctio suscipit ducimus, perferend
								margin-bottom: 35px;is incidunt odit maiores soluta? Dolorem ea
								iure reiciendis illum voluptas!
							</Desc>
						</SubSection>
						<SubSection>
							<Title margin='10px'>Short is the New Long</Title>
							<Desc>
								Lorem ipsum dolor sit amet consectetur margin: '20px
								20px'adipisicing elit. Corporis dolor neque distinctio suscipit
								ducimus, perferendis incidunt odit maiores soluta? Dolorem ea
								iure reiciendis illum voluptas!
							</Desc>
						</SubSection>
					</MiddleRight>
				</Middle>
				<Bottom>
					<SubSection>
						{/* <VideoCameraFrontIcon /> */}
						<Title>Watch</Title>
						<Desc>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Velit,
							consequuntur.
						</Desc>
					</SubSection>
					<SubSection>
						{/* <GroupsOutlinedIcon /> */}
						<Title>Learn</Title>{' '}
						<Desc>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Velit,
							consequuntur.
						</Desc>
					</SubSection>
					<SubSection>
						{/* <ShareOutlinedIcon /> */}
						<Title>Share</Title>{' '}
						<Desc>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Velit,
							consequuntur.
						</Desc>
					</SubSection>
				</Bottom>
			</Container>
			<Footer></Footer>
		</>
	);
};

export default Home;
