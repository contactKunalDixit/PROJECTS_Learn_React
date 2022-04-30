import * as React from 'react';
import './dataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTablesource';
import { Link } from 'react-router-dom';
const DataTable = () => {
	const actionColumn = [
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: () => {
				return (
					<div className='cellAction'>
						<Link to='/users/123' style={{ textDecoration: 'none' }}>
							<button className='viewButton'>View</button>
						</Link>
						<button className='deleteButton'> Delete</button>
					</div>
				);
			},
		},
	];
	return (
		<React.Fragment>
			<div className='dataTable'>
				<h1>Customers</h1>
				<Link to='/users/new' style={{ textDecoration: 'none' }}>
					<button className='ActionBtn'>Add New</button>
				</Link>
			</div>
			<div style={{ height: 500, width: '100%' }}>
				<DataGrid
					rows={userRows}
					columns={userColumns.concat(actionColumn)}
					pageSize={7}
					rowsPerPageOptions={[7]}
					checkboxSelection
					sx={{ fontSize: '13px' }}
				/>
			</div>
		</React.Fragment>
	);
};

export default DataTable;
