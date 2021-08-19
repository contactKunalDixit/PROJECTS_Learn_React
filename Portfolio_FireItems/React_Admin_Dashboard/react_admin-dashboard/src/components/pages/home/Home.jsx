import React from 'react';
import styles from './home.module.css';
import FeaturedInfo from '../../featuredInfo/FeaturedInfo';

const Home = () => {
	return (
		<div className={styles.home}>
			<div className={styles.wrapper}></div>
			<FeaturedInfo></FeaturedInfo>
		</div>
	);
};

export default Home;
