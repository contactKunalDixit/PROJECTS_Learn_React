import React from 'react';
import styles from './burgers.module.css';

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
						<div className={styles.card}>
							<h2>Card</h2>
							<div className={styles.imgSec}>
								<img></img>
							</div>
							<div className={styles.imgDesc}></div>
						</div>
						<div className={styles.card}>
							<h2>Card</h2>
							<div className={styles.imgSec}>
								<img></img>
							</div>
							<div className={styles.imgDesc}></div>
						</div>
						<div className={styles.card}>
							<h2>Card</h2>
							<div className={styles.imgSec}>
								<img></img>
							</div>
							<div className={styles.imgDesc}></div>
						</div>
						<div className={styles.card}>
							<h2>Card</h2>
							<div className={styles.imgSec}>
								<img></img>
							</div>
							<div className={styles.imgDesc}></div>
						</div>
						<div className={styles.card}>
							<h2>Card</h2>
							<div className={styles.imgSec}>
								<img></img>
							</div>
							<div className={styles.imgDesc}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Burgers;
