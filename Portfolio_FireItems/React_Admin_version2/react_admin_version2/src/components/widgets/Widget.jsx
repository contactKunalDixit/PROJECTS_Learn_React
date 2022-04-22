import React from 'react';
import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';

const Widget = ({ type }) => {
	let data;
	switch (type) {
		case 'user':
			data = {
				title: 'USERS',
				isMoney: false,
				link: 'See all users',
				icon: (
					<PersonOutlineOutlinedIcon
						sx={{
							color: 'purple',
							backgroundColor: 'rgb(255, 199, 233);',
						}}
					/>
				),
			};

			break;
		case 'order':
			data = {
				title: 'ORDERS',
				isMoney: false,
				link: 'View all orders',
				icon: (
					<ShoppingCartOutlinedIcon
						sx={{
							color: 'rgb(255, 145, 0)',
							backgroundColor: 'rgb(250, 250, 170)',
						}}
					/>
				),
			};

			break;
		case 'earning':
			data = {
				title: 'EARNINGS',
				isMoney: true,
				link: 'View net earnings',
				icon: (
					<MonetizationOnOutlinedIcon
						sx={{
							color: 'rgb(53, 116, 36)',
							backgroundColor: 'rgb(204, 251, 224)',
						}}
					/>
				),
			};

			break;
		case 'balance':
			data = {
				title: 'MY BALANCE',
				isMoney: true,
				link: 'See details',
				icon: (
					<CurrencyExchangeOutlinedIcon
						sx={{
							color: 'rgb(0, 35, 234)',
							backgroundColor: 'rgb(204, 204, 251)',
						}}
					/>
				),
			};

			break;
		default:
			break;
	}

	// Temporary data for Amount: finally would be fetched
	let amount = 100;
	let diff = 20;

	return (
		<div className='wrapper_widget'>
			<div className='left_widget'>
				<span className='title'>{data.title}</span>
				<span className='counter'>
					{data.isMoney ? '$' : ''}
					{amount}
				</span>
				<span className='link'>{data.link}</span>
			</div>
			<div className='right_widget'>
				<div className='percentage positive '>
					<KeyboardArrowUpOutlinedIcon></KeyboardArrowUpOutlinedIcon>
					<span>{diff}%</span>
				</div>
				<div className='widgetLinkIcon'>{data.icon}</div>
			</div>
		</div>
	);
};

export default Widget;
