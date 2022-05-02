import React from 'react';
import './userList.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DataTable from '../../components/dataTable/DataTable';

const userList = () => {
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

export default userList;
