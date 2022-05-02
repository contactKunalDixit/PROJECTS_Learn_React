import * as React from 'react';
import './dataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { prodColumns, productRow } from '../../dataTablesource';
import { Link } from 'react-router-dom';

const ProdDataTable = () => {
	const actionColumn = [
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: () => {
				return (
					<div className='cellAction'>
						<button className='viewButton'>View</button>

						<button className='deleteButton'> Delete</button>
					</div>
				);
			},
		},
	];
	return (
		<React.Fragment>
			<div className='dataTable'>
				<h1>Products</h1>
				<Link to='/products/new' style={{ textDecoration: 'none' }}>
					<button className='ActionBtn'>Add New</button>
				</Link>
			</div>
			<div style={{ height: 500, width: '100%' }}>
				<DataGrid
					rows={productRow}
					columns={prodColumns.concat(actionColumn)}
					pageSize={7}
					rowsPerPageOptions={[7]}
					checkboxSelection
					sx={{ fontSize: '13px' }}
				/>
			</div>
		</React.Fragment>
	);
};

export default ProdDataTable;
