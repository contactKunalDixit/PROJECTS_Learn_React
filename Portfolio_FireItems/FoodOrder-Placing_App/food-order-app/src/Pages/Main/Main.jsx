import React from 'react';
import Banner from './Banner';
import ChickenBurgerCarousel from './ChickenBurgerCarousel';
import CocktailsCarousel from './CocktailsCarousel';
import GermanBeerCarousel from './GermanBeerCarousel';
import styles from './main.module.css';
import SaladsCarousel from './SaladsCarousel';
import Cart from '../../components/Cart';
const Main = () => {
	return (
		<main className={styles.Main}>
			<div className={styles.wrapper}>
				<Banner />
				{/* <Cart /> */}
				{/* It doesnt matter where we place the 'Cart' because it is being handled through Portal whose opening has been placed in the HTML file  */}
				<GermanBeerCarousel />
				<ChickenBurgerCarousel />
				<CocktailsCarousel />
				<SaladsCarousel />
			</div>
		</main>
	);
};
export default Main;
