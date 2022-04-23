import React from 'react';
import './homeContainer.scss';
// import Widget from '../widgets';
import Widget from '../widgets/Widget';
import FeaturedChart from '../chart_Featured/FeaturedChart';
import NormalChart from '../chart_Normal/NormalChart';
import ListContainer from '../list_Container/ListContainer';
const HomeContainer = () => {
	return (
		<div className='homeContainer'>
			<div className='wrapper_homeContainer'>
				<div className='homeContainerWidget'>
					<Widget type='user'></Widget>
					<Widget type='order'></Widget>
					<Widget type='earning'></Widget>
					<Widget type='balance'></Widget>
				</div>
				<div className='homeContainer_Charts'>
					<FeaturedChart></FeaturedChart>
					<NormalChart></NormalChart>
				</div>

				<div className='listContainer_Tables'>
					<ListContainer></ListContainer>
				</div>
			</div>
		</div>
	);
};

export default HomeContainer;
