import React from 'react';
import styles from './burgers.module.css';
import { productBurger } from '../../data';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { GrSubtractCircle } from 'react-icons/gr';
const Burgers = () => {
	return (
		<div className={styles.Burgers}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<h1>Burgers</h1>
					<h3>Choose your Favourite</h3>
				</div>

				<div className={styles.bottom}>
					<div className={styles.scrolling_wrapper_flexbox}>
						{productBurger.map((i) => {
							return (
								<div className={styles.card}>
									<div className={styles.Sec1}>
										<h2 className={styles.title}>{i.title}</h2>
										<div className={styles.prodInfo}>
											<div className={styles.imgSec}>
												<img src={i.img} alt='burger'></img>
											</div>
											<div className={styles.imgDesc}>{i.desc}</div>
										</div>
									</div>
									<div className={styles.Sec2}>
										<div className={styles.prodQty}>
											<div className={styles.Qty}>
												<div className={styles.add}>
													<button>
														<AiOutlinePlusCircle
															style={{
																fontSize: '30px',
																border: '0px',
															}}
														/>
													</button>
												</div>
												<div className={styles.reduce}>
													<button>
														<GrSubtractCircle
															style={{
																fontSize: '30px',
																border: '0px',
																padding: '0px',
																margin: '0px',
															}}
														/>
													</button>
												</div>
												<div className={styles.total}>Total</div>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Burgers;
