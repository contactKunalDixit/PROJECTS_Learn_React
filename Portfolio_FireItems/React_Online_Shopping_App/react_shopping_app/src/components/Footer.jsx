import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import styled from 'styled-components';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RoomIcon from '@material-ui/icons/Room';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import { mobile } from '../components/responsive';

const Container = styled.div`
	display: flex;
	${mobile({ flexDirection: 'column' })}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1`
	${mobile({ display: 'flex', justifyContent: 'center' })}
`;
const Desc = styled.p`
	margin: 20px 0;
`;

const SocialContainer = styled.div`
	display: flex;
`;

const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display: 'none' })}
`;

const Title = styled.h3`
	margin-bottom: 30px;
	${mobile({ display: 'flex', justifyContent: 'center' })}
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;
const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
	width: 50%;
`;
const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>KunalD.</Logo>
				<Desc>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Reprehenderit velit odio a ab facilis exercitationem inventore
					obcaecati. Aliquam, ducimus aspernatur!
				</Desc>
				<SocialContainer>
					<SocialIcon color='3b5999'>
						<FacebookIcon />
					</SocialIcon>
					<SocialIcon color='e4405f'>
						<InstagramIcon />
					</SocialIcon>
					<SocialIcon color='55acee'>
						<TwitterIcon />
					</SocialIcon>
					<SocialIcon color='e60023'>
						<PinterestIcon />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>{' '}
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				{' '}
				<Title>Contact</Title>
				<ContactItem>
					<RoomIcon style={{ marginRight: '10px' }} /> 123, Bedok Reservoir
					Road, Singapore
				</ContactItem>
				<ContactItem>
					<PhoneInTalkOutlinedIcon style={{ marginRight: '10px' }} /> +1 234 56
					78
				</ContactItem>
				<ContactItem>
					<MailOutlineOutlinedIcon style={{ marginRight: '10px' }} />
					Test@gmail.com
				</ContactItem>
				<Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
			</Right>
		</Container>
	);
};

export default Footer;
