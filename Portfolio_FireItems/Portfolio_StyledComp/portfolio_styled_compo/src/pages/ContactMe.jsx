import React, { useState } from 'react';
import styled from 'styled-components';
import ContactMeImg from '../components/assets/shakeHands2.png';

const Wrapper = styled.div`
	display: flex;
	width: 100vw;
	height: calc(100vh - 50px);
`;
const Left = styled.div`
	flex: 1;
	/* overflow: hidden; */
	position: relative;
`;
const Image = styled.img`
	width: 100%;
	max-width: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 20%;
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Title = styled.h1`
	font-size: 50px;
	margin-bottom: 5%;
	font-weight: 400;
`;
const ContactBox = styled.div`
	width: 80%;
	height: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`;
const HighBox = styled.div`
	box-shadow: 0px 0px 15px -8px black;
	font-size: 18px;
	font-weight: 500;
	border-radius: 10px;
	width: 90%;
	height: 20%;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
`;

const HighBoxText = styled.h4`
	margin-left: 20px;
	font-weight: 500;
`;

const spanText = styled.a``;

const Contact = () => {
	const [message, setMessage] = useState(false);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		setMessage(true);
	};
	return (
		<Wrapper>
			<Left>
				<Image src={ContactMeImg}></Image>
			</Left>
			<Right>
				<Title>Contact</Title>
				<ContactBox>
					<HighBox>
						<HighBoxText>Email: contactkunaldixit@gmail.com</HighBoxText>
					</HighBox>
					<HighBox>
						<HighBoxText>Phone: +65 90301206</HighBoxText>
					</HighBox>
					<HighBox>
						<HighBoxText>
							Linkedin:{' '}
							<a
								href='https://www.linkedin.com/in/contact-kunal-dixit'
								target='_blank'
								rel='noopener noreferrer'
							>
								www.linkedin.com/in/contact-kunal-dixit
							</a>
						</HighBoxText>
					</HighBox>
					<HighBox>
						<HighBoxText>
							GitHub:{' '}
							<a
								href='https://github.com/contactKunalDixit'
								target='_blank'
								rel='noopener noreferrer'
							>
								www.github.com/contactKunalDixit
							</a>
						</HighBoxText>
					</HighBox>
				</ContactBox>
			</Right>
		</Wrapper>
	);
};

export default Contact;
