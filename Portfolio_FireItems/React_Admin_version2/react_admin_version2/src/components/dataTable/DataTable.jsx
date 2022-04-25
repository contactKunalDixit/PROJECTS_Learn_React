import * as React from 'react';
import './dataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../dataTablesource';

const DataTable = () => {
	return (
		<React.Fragment>
			<div className='dataTable'>DataTable</div>
			<div style={{ height: 500, width: '100%' }}>
				<DataGrid
					rows={userRows}
					columns={userColumns}
					pageSize={7}
					rowsPerPageOptions={[5]}
					checkboxSelection
				/>
			</div>
		</React.Fragment>
	);
};

export default DataTable;
