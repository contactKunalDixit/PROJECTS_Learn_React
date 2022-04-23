import React from 'react';
import './featuredChart.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const FeaturedChart = () => {
	let percentage = 66;
	return (
		<div className='featuredChart'>
			<div className='top_featured'>
				<h1 className='title_featured'>Total Reveanue</h1>
				<MoreVertOutlinedIcon fontSize='small' sx={{ cursor: 'pointer' }}>
					{' '}
				</MoreVertOutlinedIcon>
			</div>
			<div className='bottom_featured'>
				<div className='featuredProgressChart'>
					<CircularProgressbar
						value={percentage}
						text={`${percentage}%`}
						strokeWidth={3}
					/>
				</div>
				<div className='descData'>
					<p className='title'>Total sales made today</p>
					<p className='amount'>$120</p>
					<p className='desc'>
						Previous transactions processing. Lat payments may not be included
					</p>
				</div>
				<div className='summary'>
					<div className='item'>
						<div className='itemTitle'>Target</div>
						<div className='itemResult negative'>
							<KeyboardArrowDownOutlinedIcon fontSize='small' />
							<div className='resultAmount'>$12.4k</div>
						</div>
					</div>
					<div className='item'>
						<div className='itemTitle'>Last Week</div>
						<div className='itemResult positive'>
							<KeyboardArrowUpOutlinedIcon fontSize='small' />
							<div className='resultAmount'>$12.4k</div>
						</div>
					</div>
					<div className='item'>
						<div className='itemTitle'>Last Month</div>
						<div className='itemResult positive'>
							<KeyboardArrowUpOutlinedIcon fontSize='small' />
							<div className='resultAmount'>$12.4k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedChart;
