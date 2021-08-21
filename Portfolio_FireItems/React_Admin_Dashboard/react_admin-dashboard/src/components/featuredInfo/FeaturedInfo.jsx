import React from 'react';
import styles from './featuredInfo.module.css';
import {
	ArrowDownward,
	ArrowUpward,
	DragHandleOutlined,
} from '@material-ui/icons';
const FeaturedInfo = () => {
	return (
		<div className={styles.featured}>
			<div className={styles.featuredItem}>
				<span className={styles.featuredTitle}>Revenue</span>
				<div className={styles.featuredMoneyContainer}>
					<span className={styles.featuredMoney}>$2454</span>
					<span className={styles.featuredMoneyRate}>
						-11.4
						<ArrowDownward
							className={`${styles.featuredIcon} ${styles.negative}`}
							fontSize='small'
						/>
					</span>
				</div>
				<span className={styles.featuredSub}>Compared to Last month</span>
			</div>

			<div className={styles.featuredItem}>
				<span className={styles.featuredTitle}>Sales</span>
				<div className={styles.featuredMoneyContainer}>
					<span className={styles.featuredMoney}>$4454</span>
					<span className={styles.featuredMoneyRate}>
						0
						<DragHandleOutlined
							className={`${styles.featuredIcon} ${styles.neutral}`}
							fontSize='small'
						/>
					</span>
				</div>
				<span className={styles.featuredSub}>Compared to Last month</span>
			</div>

			<div className={styles.featuredItem}>
				<span className={styles.featuredTitle}>Cost</span>
				<div className={styles.featuredMoneyContainer}>
					<span className={styles.featuredMoney}>$2023</span>
					<span className={styles.featuredMoneyRate}>
						+2.1
						<ArrowUpward
							className={`${styles.featuredIcon} `}
							fontSize='small'
						/>
					</span>
				</div>
				<span className={styles.featuredSub}>Compared to Last month</span>
			</div>
		</div>
	);
};

export default FeaturedInfo;
