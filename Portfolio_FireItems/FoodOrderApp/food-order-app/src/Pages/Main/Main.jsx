import React from 'react';
import Banner from './Banner';
import GermanBeerCarousel from './GermanBeerCarousel';
import styles from './main.module.css';
const Main = () => {
	return (
		<div className={styles.Main}>
			<div className={styles.wrapper}>
				<Banner />
				<GermanBeerCarousel />
			</div>
		</div>
	);
};
export default Main;
