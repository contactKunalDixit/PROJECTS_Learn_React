import React from 'react';
import styles from './germanBeer.module.css';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { AiFillMinusSquare } from 'react-icons/ai';
import { GermanBeerData } from '../../data';
import Input from '../../components/utilities/Input';

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
						<div className={styles.prodOrderQty}>
							<form action=''>
								<div className={styles.left}>
									<button className={styles.Qtybutton}>
										<BsFillPlusSquareFill
											style={{ fontSize: '32px', fontWeight: '600' }}
										/>
									</button>
								</div>
								<div className={styles.center}>
									<Input
										// label='Amount'
										input={{
											id: 'amount_' + props.id, // this changed!,
											type: 'number',
											min: '1',
											max: '5',
											step: '1',
											defaultValue: '0',
										}}
									></Input>
								</div>
								<div className={styles.right}>
									<button className={styles.Qtybutton}>
										<AiFillMinusSquare
											style={{ fontSize: '41px', fontWeight: '600' }}
										/>
									</button>
								</div>
							</form>
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

export default GermanBeerCarousel;
