import React, { useState } from 'react';
import styles from './userList.module.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteForeverOutlined } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

const UserList = () => {
	const [data, setData] = useState(userRows);

	// Row delete func
	const rowDeleteFunc = (id) => {
		setData(data.filter((item) => item.id !== id));
	};
	const columns = [
		{ field: 'id', headerName: 'ID', width: 120 },
		{
			field: 'user',
			headerName: 'User',
			width: 200,
			renderCell: (params) => {
				// console.log(params);
				return (
					<div className={styles.userListUser}>
						<img src={params.row.avatar} alt=''></img>
						{params.row.userName}
					</div>
				);
			},
		},

		{
			field: 'email',
			headerName: 'Email',

			width: 240,
			editable: true,
		},
		{
			field: 'status',
			headerName: 'Status',

			sortable: true,
			width: 160,
		},
		{
			field: 'transaction',
			headerName: 'Last Transaction',

			sortable: true,
			width: 260,
		},
		{
			field: 'Actions',
			headerName: 'Actions',
			width: 200,
			renderCell: (params) => {
				return (
					<div className={styles.ActionsBox}>
						<Link to={`${/user/}${params.row.id}`}>
							<button className={styles.userListEdit}>Edit</button>
						</Link>

						<DeleteForeverOutlined
							fontSize='medium'
							className={styles.userListDel}
							onClick={() => {
								rowDeleteFunc(params.row.id);
							}}
						></DeleteForeverOutlined>
					</div>
				);
			},
		},
	];

	return (
		<div className={styles.userList}>
			<DataGrid
				rows={data}
				columns={columns}
				pageSize={8}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
};

export default UserList;
