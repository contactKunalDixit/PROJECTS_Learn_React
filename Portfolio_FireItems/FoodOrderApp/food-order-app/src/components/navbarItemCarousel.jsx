import React from 'react';
import styles from './navbarItemCarousel.module.css';

const NavbarItemCarousel = () => {
	return (
		<div className={styles.navbarItemCarousel}>
			<div className={styles.scrolling_wrapper_flexbox}>
				<div className={styles.card}>
					<h2>GERMAN BEERS</h2>
				</div>
				<div className={styles.card}>
					<h2>CHICKEN BURGERS</h2>
				</div>
				<div className={styles.card}>
					<h2>COCKTAILS</h2>
				</div>
				<div className={styles.card}>
					<h2>SALADS</h2>
				</div>
			</div>
		</div>
	);
};

export default NavbarItemCarousel;
