import React from 'react';
import styles from './topbar.module.css';
import {
	Assessment,
	NotificationsNone,
	Language,
	Settings,
} from '@material-ui/icons';

const TopBar = () => {
	return (
		<div className={styles.topbar}>
			<div className={styles.topbarWrapper}>
				<div className={styles.topLeft}>
					<div className={styles.iconWrapper}>
						<Assessment fontSize='large'></Assessment>
						<div>Smart_Analytics</div>
					</div>
				</div>
				<div className={styles.topRight}>
					<div className={styles.iconWrapper}>
						<div className={styles.topbarIconContainer}>
							<NotificationsNone fontSize='medium' />
							<span className={styles.topIconBadge}>2</span>
							<Language></Language>
							<span className={styles.topIconBadge}>2</span>
							<Settings></Settings>
							<span className={styles.topIconBadge}>2</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
