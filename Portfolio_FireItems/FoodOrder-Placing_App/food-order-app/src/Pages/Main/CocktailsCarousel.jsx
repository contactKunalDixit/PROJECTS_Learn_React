import React from 'react';
import styles from './cocktails.module.css';
import { productDrinks } from '../../data';
import MealItemForm from '../../components/utilities/MealItemForm';
import ReadMoreButton from '../../components/utilities/ReadMoreButton';

const Cocktails = (props) => {
	return (
		<section className={styles.product}>
			<h1 className={styles.prodTitle}>COCKTAILS</h1>

			<div className={styles.prodCard_scrolling_wrapper}>
				{productDrinks.map((item) => (
					<div className={styles.prodCard} key={item.id}>
						<div className={styles.prodPic}>
							<img
								src={item.img}
								alt='Burger'
								className={styles.prodImage}
							></img>
						</div>
						<div className={styles.prodPriceInfo}>
							<p>{item.prodPriceInfo}</p>
						</div>
						<div className={styles.prodOrderQty}>
							<MealItemForm />
						</div>
						<ReadMoreButton />
					</div>
				))}
			</div>
		</section>
	);
};

export default Cocktails;
