import React from 'react';
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='startSec'>
					<h1 className='logo'>App_Admin</h1>
				</div>
				<div className='middleSec'>
					<input type='text' placeholder='Search...' className='searchInput' />
					<button className='searchButton'>
						<SearchIcon
							sx={{
								fontSize: 18,
							}}
						></SearchIcon>
					</button>
				</div>
				<div className='endSec'>
					<div className='language'>
						<LanguageIcon sx={{ fontSize: 18 }}></LanguageIcon>
						<span>English</span>
					</div>
					<div className='theme'>
						<LightModeOutlinedIcon
							sx={{ fontSize: 18 }}
						></LightModeOutlinedIcon>
						<DarkModeOutlinedIcon sx={{ fontSize: 18 }}></DarkModeOutlinedIcon>
					</div>
					<div className='alertNotification'>
						<NotificationsOutlinedIcon
							sx={{ fontSize: 18 }}
						></NotificationsOutlinedIcon>
						<span className='alert_counter_Number'>2</span>
					</div>
					<div className='messageNotification'>
						<ChatBubbleOutlineOutlinedIcon
							sx={{ fontSize: 18 }}
						></ChatBubbleOutlineOutlinedIcon>
						<span className='alert_counter_Number'>3</span>
					</div>
					<div className='displayPic'>
						<img
							src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
							alt=''
							className='avatar_navbar'
						/>
					</div>
					<div className='settingIcon'>
						<SettingsOutlinedIcon sx={{ fontSize: 18 }}></SettingsOutlinedIcon>
					</div>
					<div className='logOut'>
						<PowerSettingsNewOutlinedIcon
							sx={{ fontSize: 18 }}
						></PowerSettingsNewOutlinedIcon>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
