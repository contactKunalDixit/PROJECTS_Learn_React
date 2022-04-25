import React from 'react';
import './listContainer.scss';
import TableHomeContainer from '../table_homeContainer/TableHomeContainer';
const ListContainer = () => {
	return (
		<div className=' listContainer_wrapper'>
			<div className='listTitle'>Latest Transactions</div>
			<TableHomeContainer></TableHomeContainer>
		</div>
	);
};

export default ListContainer;
