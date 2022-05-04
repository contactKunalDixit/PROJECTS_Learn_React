import { React, useContext } from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
	const { dispatch } = useContext(DarkModeContext);
	return (
		<div className='sidebar_sidebar'>
			<div className='center_sidebar'>
				<ul className='ParentList_sidebar'>
					<li className='listTitle_sidebar'>
						<span className='testChild_sidebar'>MAIN</span>
						<ul className='mainSec_sidebar'>
							<li>
								<Link
									to='/'
									style={{ textDecoration: 'none' }}
									className='Link'
								>
									<DashboardIcon />
									<span> Dashboard</span>
								</Link>
							</li>
						</ul>
					</li>

					<li className='listTitle_sidebar'>
						<span className='testChild_sidebar'>LISTS</span>
						<ul className='listsSec_sidebar'>
							<li>
								<Link
									to='/users'
									style={{ textDecoration: 'none' }}
									className='Link'
								>
									<PersonIcon></PersonIcon>
									<span> Users</span>
								</Link>
							</li>
							<li>
								<Link
									to='/products '
									style={{ textDecoration: 'none' }}
									className='Link'
								>
									<Inventory2Icon></Inventory2Icon>
									<span> Products</span>
								</Link>
							</li>
							<li>
								<BookmarkBorderIcon></BookmarkBorderIcon>
								<span> Orders</span>
							</li>
							<li>
								<LocalShippingIcon></LocalShippingIcon>
								<span> Delivery</span>
							</li>
						</ul>
					</li>
					<li className='listTitle_sidebar'>
						USEFULL
						<ul className='usefullSec_sidebar'>
							<li>
								<AutoGraphIcon></AutoGraphIcon>
								<span> Stats </span>
							</li>
							<li>
								<NotificationsActiveIcon></NotificationsActiveIcon>
								<span> Notifications</span>
							</li>
						</ul>
					</li>
					<li className='listTitle_sidebar'>
						SERVICE
						<ul className='serviceSec_sidebar'>
							<li>
								<HealthAndSafetyIcon></HealthAndSafetyIcon>
								<span> System Health</span>
							</li>
							<li>
								<HistoryIcon></HistoryIcon>
								<span> Logs</span>
							</li>
							<li>
								<SettingsIcon></SettingsIcon>
								<span> Settings</span>
							</li>
						</ul>
					</li>
					<li className='listTitle_sidebar'>
						USER
						<ul className='userSec_sidebar'>
							<li>
								<PersonAddIcon></PersonAddIcon>
								<span> Profiles</span>
							</li>
							<li>
								<LogoutIcon></LogoutIcon>
								<span> Logout</span>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<div className='bottom_sidebar'>
				<ul>
					<li className='listTitle_sidebar'>
						THEMES
						<ul className='themeSec_sidebar themeButton_sidebar'>
							<li>
								<div
									className='black_sidebar'
									onClick={() => {
										dispatch({ type: 'DARK' });
									}}
								></div>
							</li>
							<li>
								<div
									className='white_sidebar'
									onClick={() => {
										dispatch({ type: 'LIGHT' });
									}}
								></div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<ul></ul>
		</div>
	);
};

export default Sidebar;
