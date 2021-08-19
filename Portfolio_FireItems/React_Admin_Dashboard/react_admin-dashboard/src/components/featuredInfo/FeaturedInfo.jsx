import React from 'react';
import styles from './featuredInfo.module.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
const FeaturedInfo = () => {
	return (
		<div className={styles.featured}>
			<div className={styles.featuredItem}>
				<span className='featuredTitle'>Revenue</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>$2454</span>
					<span className='featuredMoneyRate'>
						-11.4
						<ArrowDownward />
					</span>
				</div>
				<span className='featuredSub'>Compared to Last month</span>
			</div>

			<div className={styles.featuredItem}>
				<span className='featuredTitle'>Sales</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>$4454</span>
					<span className='featuredMoneyRate'>
						-1.4
						<ArrowDownward />
					</span>
				</div>
				<span className='featuredSub'>Compared to Last month</span>
			</div>

			<div className={styles.featuredItem}>
				<span className='featuredTitle'>Cost</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>$2023</span>
					<span className='featuredMoneyRate'>
						+2.1
						<ArrowUpward />
					</span>
				</div>
				<span className='featuredSub'>Compared to Last month</span>
			</div>
		</div>
	);
};

export default FeaturedInfo;
