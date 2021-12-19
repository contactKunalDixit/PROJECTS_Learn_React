import React from 'react';
import styles from './topbar.module.css';
import { Assessment, Language, Settings } from '@material-ui/icons';
import { BsPatchQuestion } from 'react-icons/bs';
const TopBar = () => {
	return (
		<div className={styles.topbar}>
			<div className={styles.topbarWrapper}>
				<div className={styles.topLeft}>
					<div className={styles.iconWrapper}>
						<Assessment fontSize='large'></Assessment>
						<div className={styles.logoTitle}>Optima - Price Analytics</div>
					</div>
				</div>
				<div className={styles.topRight}>
					<div className={styles.iconWrapper}>
						<div className={styles.topbarIconContainer}>
							<BsPatchQuestion
								fontSize='large'
								style={{ fontSize: '20px' }}
							></BsPatchQuestion>
							{/* <span className={styles.topIconBadge}>1</span> */}
						</div>

						<div className={styles.topbarIconContainer}>
							<Settings fontSize='medium'></Settings>
							{/* <span className={styles.topIconBadge}>3</span> */}
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
