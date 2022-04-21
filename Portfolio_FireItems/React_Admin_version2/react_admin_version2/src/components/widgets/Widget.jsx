import React from 'react';
import './widget.scss';

const Widget = () => {
	return (
		<div className='wrapper_widget'>
			<div className='left_widget'>
				<span className='title'>USERS</span>
				<span className='counter'>213</span>
				<span className='link'>See all users</span>
			</div>
			<div className='right_widget'>
				<div className='percentage'></div>
			</div>
		</div>
	);
};

export default Widget;
