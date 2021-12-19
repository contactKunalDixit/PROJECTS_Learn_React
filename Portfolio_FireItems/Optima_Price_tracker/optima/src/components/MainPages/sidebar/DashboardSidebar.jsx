import React from 'react';
import styles from './sidebar.module.css';
import { HomeOutlined, TimelineOutlined, TrendingUp } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
	return (
		<div className={styles.sidebarMenu}>
			<h3 className={styles.sidebarTitle}>Dashboard</h3>
			<ul className={styles.sidebarList}>
				<Link to='/' className={styles.link}>
					<li className={`${styles.sidebarListItem} ${styles.active}`}>
						<HomeOutlined fontSize='small' style={{ marginRight: '5px' }} />
						Home
					</li>
				</Link>

				<li className={styles.sidebarListItem}>
					<TimelineOutlined fontSize='small' style={{ marginRight: '5px' }} />
					Analytics
				</li>
			</ul>
		</div>
	);
};

export default DashboardSidebar;
