import React from 'react';
import styles from './home.module.css';
import FeaturedInfo from '../../featuredInfo/FeaturedInfo';
import Charts from '../../charts/Charts';
import { userData } from '../../dummyData';
import WidgetSm from '../../widgetSmall/WidgetSm';
import WidgetLg from '../../widgetLarge/WidgetLg';

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
			<div className={styles.homeWidgets}>
				<WidgetSm></WidgetSm>
				<WidgetLg></WidgetLg>
			</div>
		</div>
	);
};

export default Home;
