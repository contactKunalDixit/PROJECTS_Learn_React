import React from 'react';
import Banner from './Banner';
import ChickenBurgerCarousel from './ChickenBurgerCarousel';
import CocktailsCarousel from './CocktailsCarousel';
import GermanBeerCarousel from './GermanBeerCarousel';
import styles from './main.module.css';
import SaladsCarousel from './SaladsCarousel';
const Main = () => {
	return (
		<div className={styles.Main}>
			<div className={styles.wrapper}>
				<Banner />
				<GermanBeerCarousel />
				<ChickenBurgerCarousel />
				<CocktailsCarousel />
				<SaladsCarousel />
			</div>
		</div>
	);
};
export default Main;
