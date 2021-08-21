import React from 'react';
import styles from './home.module.css';
import FeaturedInfo from '../../featuredInfo/FeaturedInfo';
import Charts from '../../charts/Charts';
import { userData } from '../../dummyData';

const Home = ({ dummyData }) => {
	return (
		<div className={styles.home}>
			<div className={styles.wrapper}></div>
			<FeaturedInfo></FeaturedInfo>
			<Charts
				data={userData}
				title='User Analytics'
				grid
				dataKey='Active users'
			></Charts>
		</div>
	);
};

export default Home;
