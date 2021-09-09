import React, { useState } from 'react';
import styled from 'styled-components';
import Man from '../Img/businessman.png';
import MiniCard from './MiniCard';
import Play from '../Img/play.png';

const ServiceContainer = styled.div`
	display: flex;
	height: 100%;
	@media only screen and (max-width: 480px) {
		flex-direction: column;
	}
`;

const Left = styled.div`
	width: 50%;
	position: relative;
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;

const Image = styled.img`
	display: ${(props) => props.open && 'none'};
	height: 120%;
	margin-left: -50px;
`;

const Video = styled.video`
	display: ${(props) => !props.open && 'none'};
	height: 300px;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Right = styled.div`
	width: 50%;
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	flex-direction: column;
	@media only screen and (max-width: 480px) {
		padding: 20px;
	}
`;

const Title = styled.h1``;

const Desc = styled.p`
	font-size: 20px;
	margin-top: 20px;
	color: #555;
`;

const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 50px;
`;

const Button = styled.button`
	width: 180px;
	border: none;
	border-radius: 10px;
	background-color: darkblue;
	color: white;
	font-size: 20px;
	padding: 15px;
	margin-top: 50px;
	cursor: pointer;
	display: flex;
	align-items: center;
`;

const Icon = styled.img`
	width: 20px;
	margin-right: 10px;
`;

const Modal = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
	position: absolute;
	background-color: white;
	padding: 5px;
	border: none;
	border-radius: 5px;
	right: 5px;
	top: 30%;
`;

const Service = () => {
	const [open, setOpen] = useState(false);
	const smallScreen = window.screen.width <= 480 ? true : false;
	return (
		<ServiceContainer>
			<Left>
				<Image open={open} src={Man} />
				<Video
					open={open}
					autoPlay
					loop
					controls
					src='https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761'
				/>
			</Left>
			<Right>
				<Wrapper>
					<Title>Simple process to start</Title>
					<Desc>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
						nostrum exercitationem ex amet unde id nesciunt autem atque est ut
						officia illum debitis, expedita natus suscipit? Reiciendis tempora
						omnis dicta nobis? Sint ratione iste, doloribus corrupti et quidem
						natus. Ipsum unde soluta animi officiis quisquam quia esse
						reprehenderit tempore excepturi!
					</Desc>
					<CardContainer>
						<MiniCard />
						<MiniCard />
						<MiniCard />
					</CardContainer>
					<Button onClick={() => setOpen(true)}>
						<Icon src={Play} />
						How it works
					</Button>
				</Wrapper>
			</Right>
			{smallScreen && open && (
				<Modal>
					<Video
						open={open}
						autoPlay
						loop
						controls
						src='https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761'
					/>
					<CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
				</Modal>
			)}
		</ServiceContainer>
	);
};

export default Service;
