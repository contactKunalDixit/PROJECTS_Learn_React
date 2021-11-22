import React from 'react';
import styles from './cocktails.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { AiFillMinusSquare } from 'react-icons/ai';
import { productDrinks } from '../../data';

const Cocktails = () => {
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
						<div className={styles.prodOrderedQty}>
							<div className={styles.left}>
								<button className={styles.Qtybutton}>
									<BsFillPlusSquareFill
										style={{ fontSize: '32px', fontWeight: '600' }}
									/>
								</button>
							</div>
							<div className={styles.center}>
								<div className={styles.chosenQty}>
									<p>9</p>
								</div>
							</div>
							<div className={styles.right}>
								<button className={styles.Qtybutton}>
									<AiFillMinusSquare
										style={{ fontSize: '41px', fontWeight: '600' }}
									/>
								</button>
							</div>
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

export default Cocktails;
