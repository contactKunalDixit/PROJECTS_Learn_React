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
							<NotificationsNone fontSize='medium'></NotificationsNone>
							<span className={styles.topIconBadge}>1</span>
						</div>
						<div className={styles.topbarIconContainer}>
							<Language fontSize='medium'></Language>
							<span className={styles.topIconBadge}>2</span>
						</div>
						<div className={styles.topbarIconContainer}>
							<Settings fontSize='medium'></Settings>
							<span className={styles.topIconBadge}>3</span>
						</div>
						<img
							src='https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?cs=srgb&dl=pexels-anastasia-shuraeva-5704720.jpg&fm=jpg'
							alt=''
							className={`${styles.topAvatar} ${styles.topbarIconContainer}`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
