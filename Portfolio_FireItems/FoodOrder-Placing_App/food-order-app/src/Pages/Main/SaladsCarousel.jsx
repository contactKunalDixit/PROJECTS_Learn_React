import React from 'react';
import styles from './saladCarousel.module.css';
import { SaladData } from '../../data';
import MealItemForm from '../../components/utilities/MealItemForm';
import ReadMoreButton from '../../components/utilities/ReadMoreButton';
const Salads = (props) => {
	return (
		<section className={styles.product}>
			<h1 className={styles.prodTitle}>SALADS</h1>

			<div className={styles.prodCard_scrolling_wrapper}>
				{SaladData.map((item) => (
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

export default Salads;
