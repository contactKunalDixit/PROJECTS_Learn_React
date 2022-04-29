import React from 'react';
import './user_FeaturedDP.scss';
import imageDP from '../../Images/Screenshot 2022-04-29 at 12.17.23 AM.png';

const UserFeaturedDP = () => {
	return (
		<div className='User_FeaturedDP'>
			<div className='top_featured'>
				<h1 className='title_featured'>Information</h1>
				<div className='editButton'>Edit</div>
			</div>
			<div className='bottom_featured'>
				<div className='leftDP'>
					<img src={imageDP} alt='' className='user_DP' />
				</div>
				<div className='rightUserInfo'>
					<div className='userNameTitle'>Joey Doe</div>
					<div className='userEmail'>
						<span>Email: </span> JoeyDoe@gmail.com
					</div>
					<div className='userPhone'>
						<span>Phone: </span> +1 789 123456
					</div>
					<div className='userAddress'>
						<span>Address: </span>
						Elton Street, 234 Garden Aveanue, New York, USA{' '}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserFeaturedDP;
