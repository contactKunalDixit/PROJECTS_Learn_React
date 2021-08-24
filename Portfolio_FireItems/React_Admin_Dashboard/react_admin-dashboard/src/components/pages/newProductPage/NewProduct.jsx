import React from 'react';
import styles from './newProduct.module.css';
const NewProduct = () => {
	return (
		<div className={styles.newProduct}>
			<h1 className={styles.addProductTitle}>New Product</h1>
			<form className={styles.addProductForm}>
				<div className={styles.addProductItem}>
					<label>Image</label>
					<input type='file' id='file' />
				</div>
				<div className={styles.addProductItem}>
					<label>Name</label>
					<input type='text' placeholder='Apple Airpods' />
				</div>
				<div className={styles.addProductItem}>
					<label>Stock</label>
					<input type='text' placeholder='123' />
				</div>
				<div className={styles.addProductItem}>
					<label>Active</label>
					<select name='active' id='active'>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
				</div>
				<button className={styles.addProductButton}>Create</button>
			</form>
		</div>
	);
};

export default NewProduct;
