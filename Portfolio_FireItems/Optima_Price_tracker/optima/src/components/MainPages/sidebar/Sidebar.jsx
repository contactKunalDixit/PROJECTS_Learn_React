import React from 'react';
import DashboardSidebar from './DashboardSidebar';

import styles from './sidebar.module.css';
import SideBarAnalysis from './SideBarAnalysis';

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebarWrapper}>
				<DashboardSidebar />
				<SideBarAnalysis />
			</div>
		</div>
	);
};

export default Sidebar;
