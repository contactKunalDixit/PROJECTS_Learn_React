import React from 'react';
import './list.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DataTable from '../../components/dataTable/DataTable';

const List = () => {
	return (
		<div className='list'>
			<Navbar></Navbar>
			<Sidebar></Sidebar>
			<div className='listContainer'>
				<div className='wrapper_listContainer'>
					<DataTable></DataTable>
				</div>
			</div>
		</div>
	);
};

export default List;
