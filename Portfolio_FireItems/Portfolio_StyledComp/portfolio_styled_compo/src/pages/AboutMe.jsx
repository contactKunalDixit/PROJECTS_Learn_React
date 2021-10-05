import React from 'react';
import styled from 'styled-components';
import SelfPhoto from '../components/assets/KunalCartoonPotrait.jpg';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: calc(100vh - 70px);
	margin-top: 10px;
`;
const Container1 = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Left = styled.div`
	flex: 0.4;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	height: 80%;
`;
const ImgContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90%;
`;
const Image = styled.img`
	width: 100%;
	max-width: 425px;
	-webkit-box-shadow: 0px 0px 17px 5px rgba(12, 7, 8, 0.57);
	box-shadow: 0px 0px 17px 5px rgba(44, 2, 10, 0.57);
	margin: 10px;
	object-fit: cover;
`;
const Right = styled.div`
	flex: 0.6;
	height: 80vh;
	/* width: 100%; */
	margin: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;
const ArticleContainer = styled.div`
	overflow-y: hidden;
	width: 90%; //////
	/* height: 0%; */
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;
const TitleBox = styled.h1`
	margin: 10px;
	font-size: 50px;
	font-weight: 400;
`;
// const ArticleBox = styled.div`
// 	/* margin: 10px;
// 	background-color: #5784aa;
// 	border-radius: 5%; */
// 	/* height: 100%; */
// `;
const ULBox = styled.ul`
	background-color: #ebecf1;
	padding: 30px;
	font-weight: 400;
	font-size: 18px;
	list-style: square inside;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;
const ListItem = styled.li`
	margin: 20px 0;
`;
const CvDownload = styled.div`
	background-color: red;
	width: 80%;
	height: 50px;
`;
const AboutMe = () => {
	return (
		<>
			<Wrapper>
				<Container1>
					<Left>
						<ImgContainer>
							<Image src={SelfPhoto}></Image>
						</ImgContainer>
					</Left>
					<Right>
						<ArticleContainer>
							<TitleBox>About Me</TitleBox>
							{/* <ArticleBox> */}
							<ULBox>
								<ListItem>
									15+ years of rich cross functional experience in Customer
									Relationship Management & retention, Direct Sales and
									Marketing, Project and process Management in the SaaS and
									Information Technology enabled Services and hospitality
									sector.
								</ListItem>

								<ListItem>
									Successfully contributed to and collaborated with Project
									Management and associated Technical teams in execution of
									various database projects.
								</ListItem>
								<ListItem>
									Exposure to relational and non-relational database mapping and
									management
								</ListItem>
								<ListItem>
									Adept in identifying and analysing the customer requirements
									to deliver user-centric solutions and maximizing customer
									satisfaction.
								</ListItem>
							</ULBox>
							{/* </ArticleBox> */}
						</ArticleContainer>
						<CvDownload>QR CODE</CvDownload>
					</Right>
				</Container1>
			</Wrapper>
		</>
	);
};

export default AboutMe;
