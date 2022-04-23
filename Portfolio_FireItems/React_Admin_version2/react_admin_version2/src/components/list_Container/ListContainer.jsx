import React from 'react';
import './listContainer.scss';
import Table from '../tables/Table';
const ListContainer = () => {
	return (
		<div className=' listContainer_wrapper'>
			<div className='listTitle'>Latest Transactions</div>
			<Table></Table>
		</div>
	);
};

export default ListContainer;
