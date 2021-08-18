import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import QuickMenuSidebar from './QuickMenuSidebar';
import NotificationsSidebar from './NotificationsSidebar';
import StaffSidebar from './StaffSidebar';

import styles from './sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebarWrapper}>
				<DashboardSidebar />
				<QuickMenuSidebar />
				<NotificationsSidebar />
				<StaffSidebar />
			</div>
		</div>
	);
};

export default Sidebar;
