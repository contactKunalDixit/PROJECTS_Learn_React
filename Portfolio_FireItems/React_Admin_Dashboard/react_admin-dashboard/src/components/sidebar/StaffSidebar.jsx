import React from 'react';
import {
	TimelineOutlined,
	WorkOutlineOutlined,
	ReportOutlined,
} from '@material-ui/icons';
import styles from './sidebar.module.css';

const StaffSidebar = () => {
	return (
		<div className={styles.sidebarMenu}>
			<h3 className={styles.sidebarTitle}>Staff</h3>
			<ul className={styles.sidebarList}>
				<li className={styles.sidebarListItem}>
					<WorkOutlineOutlined
						fontSize='small'
						style={{ marginRight: '5px' }}
					/>
					Manage
				</li>

				<li className={styles.sidebarListItem}>
					<TimelineOutlined fontSize='small' style={{ marginRight: '5px' }} />
					Analytics
				</li>
				<li className={styles.sidebarListItem}>
					<ReportOutlined fontSize='small' style={{ marginRight: '5px' }} />
					Reports
				</li>
			</ul>
		</div>
	);
};

export default StaffSidebar;
