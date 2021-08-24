import React, { useState } from 'react';
import styles from './productList.module.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteForeverOutlined } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';

const ProductList = () => {
	const [data, setData] = useState(productRows);

	// Row delete func
	const rowDeleteFunc = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 120 },
		{
			field: 'product',
			headerName: 'Product',
			width: 200,
			renderCell: (params) => {
				// console.log(params);
				return (
					<div className={styles.productListUser}>
						<img src={params.row.Image} alt=''></img>
						{params.row.productName}
					</div>
				);
			},
		},

		{
			field: 'stock',
			headerName: 'Stock',

			width: 150,
			editable: true,
		},
		{
			field: 'status',
			headerName: 'Status',

			sortable: true,
			width: 160,
		},
		{
			field: 'price',
			headerName: 'Price',

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
						<Link to={`${/product/}${params.row.id}`}>
							<button className={styles.productListEdit}>Edit</button>
						</Link>

						<DeleteForeverOutlined
							fontSize='medium'
							className={styles.productListDel}
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
		<div className={styles.productList}>
			{' '}
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

export default ProductList;
