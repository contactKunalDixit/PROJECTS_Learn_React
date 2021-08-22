import React from 'react';
import styles from './sidebar.module.css';
import { HomeOutlined, TimelineOutlined, TrendingUp } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
	return (
		<div className={styles.sidebarMenu}>
			<h3 className={styles.sidebarTitle}>Dashboard</h3>
			<ul className={styles.sidebarList}>
				<li className={`${styles.sidebarListItem} ${styles.active}`}>
					<HomeOutlined fontSize='small' style={{ marginRight: '5px' }} />
					<Link to='/'>Home</Link>
				</li>

				<li className={styles.sidebarListItem}>
					<TimelineOutlined fontSize='small' style={{ marginRight: '5px' }} />
					Analytics
				</li>
				<li className={styles.sidebarListItem}>
					<TrendingUp fontSize='small' style={{ marginRight: '5px' }} />
					Sales
				</li>
			</ul>
		</div>
	);
};

export default DashboardSidebar;
