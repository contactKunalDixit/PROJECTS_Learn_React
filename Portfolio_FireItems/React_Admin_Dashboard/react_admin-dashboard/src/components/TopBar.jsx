import React from 'react';
import styles from './topbar.module.css';
import AssessmentIcon from '@material-ui/icons/AssessmentOutlined';
import './topbar.css';
import { red } from '@material-ui/core/colors';
const TopBar = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.topbarWrapper}>
				<div className={styles.topLeft}>
					<div className={styles.iconWrapper}>
						<AssessmentIcon fontSize='large'></AssessmentIcon>
						<div>Smart_Analytics</div>
					</div>
				</div>
				<div className={styles.topRight}>Right</div>
			</div>
		</div>
	);
};

export default TopBar;
