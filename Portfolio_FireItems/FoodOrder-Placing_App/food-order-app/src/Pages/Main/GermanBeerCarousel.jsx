import React from 'react';
import styles from './germanBeer.module.css';
import { GermanBeerData } from '../../data';
import MealItemForm from '../../components/utilities/MealItemForm';
import ReadMoreButton from '../../components/utilities/ReadMoreButton';

const GermanBeerCarousel = (props) => {
	return (
		<section className={styles.product}>
			<h1 className={styles.prodTitle}>GERMAN BEERS</h1>

			<div className={styles.prodCard_scrolling_wrapper}>
				{GermanBeerData.map((item) => (
					<div className={styles.prodCard} key={item.id}>
						<div className={styles.prodPic}>
							<img
								src={item.img}
								alt='Drink'
								className={styles.prodImage}
							></img>
						</div>
						<div className={styles.prodPriceInfo}>
							<p>{item.prodPriceInfo}</p>
						</div>
						<div className={styles.prodOrderQty}></div>
						<MealItemForm />
						<ReadMoreButton />
					</div>
				))}
			</div>
		</section>
	);
};

export default GermanBeerCarousel;
