import React, { useContext } from 'react';
import styles from './chickenBurgerCarousel.module.css';
import { productBurger } from '../../data';
import MealItemForm from '../../components/utilities/MealItemForm';
import cart_Context from '../../store_context/cart_Context';

const ChickenBurgerCarousel = (props) => {
	const cartCtx = useContext(cart_Context);
	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount: amount,
			price: props.price,
		});
	};
	return (
		<section className={styles.product}>
			<h1 className={styles.prodTitle}>CHICKEN BURGERS</h1>

			<div className={styles.prodCard_scrolling_wrapper}>
				{productBurger.map((item) => (
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
							<MealItemForm onAddToCart={addToCartHandler} />
						</div>
						<div className={styles.readMoreBox}>
							<button className={styles.ReadMoreButton}>Read More</button>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ChickenBurgerCarousel;
