import React from 'react';
import './homeContainer.scss';
// import Widget from '../widgets';
import Widget from '../widgets/Widget';
const HomeContainer = () => {
	return (
		<div className='homeContainer'>
			<div className='wrapper_homeContainer'>
				<Widget></Widget>
				<Widget></Widget>
				<Widget></Widget>
				<Widget></Widget>
			</div>
		</div>
	);
};

export default HomeContainer;
