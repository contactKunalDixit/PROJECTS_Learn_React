import React from 'react';
import styles from './product.module.css';
import { Link } from 'react-router-dom';
import Chart from '../../charts/Charts';
import { prodData } from '../../dummyData';
import { Publish } from '@material-ui/icons';

const Product = () => {
	return (
		<div className={styles.product}>
			<div className={styles.productTitleContainer}>
				<h1 className={styles.productTitle}>Product</h1>
				<Link to='/newProduct'>
					<button className={styles.productAddButton}>Create</button>
				</Link>
			</div>
			<div className={styles.container}>
				<div className={styles.productTop}>
					<div className={styles.productTopLeft}>
						<Chart
							data={prodData}
							dataKey={'Unit_Sales'}
							title={'Sales Performance'}
						></Chart>
					</div>
					<div className={styles.productTopRight}>
						<div className={styles.productInfoTop}>
							<img
								src='https://images.pexels.com/photos/7205060/pexels-photo-7205060.jpeg?cs=srgb&dl=pexels-levi-loot-7205060.jpg&fm=jpg'
								alt=''
								className={styles.productInfoImage}
							/>
							<span className={styles.productName}>Apple AirPods</span>
						</div>
						<div className={styles.productInfoBottom}>
							<div className={styles.productInfoItem}>
								<span className={styles.productInfoKey}>ID: </span>
								<span className={styles.productInfoValue}>123</span>
							</div>
							<div className={styles.productInfoItem}>
								<span className={styles.productInfoKey}>Sales: </span>
								<span className={styles.productInfoValue}>3333</span>
							</div>
							<div className={styles.productInfoItem}>
								<span className={styles.productInfoKey}>Active: </span>
								<span className={styles.productInfoValue}>yes</span>
							</div>
							<div className={styles.productInfoItem}>
								<span className={styles.productInfoKey}>In Stock: </span>
								<span className={styles.productInfoValue}>No</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.productBottom}>
					<form className={styles.productForm}>
						<div className={styles.productFormLeft}>
							<label htmlFor=''>Product Name: </label>
							<input type='text' placeholder='Apple Airpods' />
							<label htmlFor=''>In Stock: </label>
							<select name='inStock' id='inStock'>
								<option value='Yes'>Yes</option>
								<option value='No'>No</option>
							</select>
							<label htmlFor=''>Active: </label>
							<select name='active' id='active'>
								<option value='Yes'>Yes</option>
								<option value='No'>No</option>
							</select>
						</div>
						<div className={styles.productFormRight}>
							<div className={styles.productUpload}>
								<img
									src='https://images.pexels.com/photos/7205060/pexels-photo-7205060.jpeg?cs=srgb&dl=pexels-levi-loot-7205060.jpg&fm=jpg'
									alt=''
									className={styles.productUploadImage}
								/>
								<label for='file'>
									<Publish></Publish>
								</label>
								<input type='file' id='file' style={{ display: 'none' }} />
							</div>
							<button className={styles.productButton}>Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Product;
