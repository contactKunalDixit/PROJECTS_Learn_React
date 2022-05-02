import React from 'react';
import './userList.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ProdDataTable from '../../components/dataTable/ProdDataTable';

const ProdList = () => {
	return (
		<div className='list'>
			<Navbar></Navbar>
			<Sidebar></Sidebar>
			<div className='listContainer'>
				<div className='wrapper_listContainer'>
					<ProdDataTable></ProdDataTable>
				</div>
			</div>
		</div>
	);
};

export default ProdList;
