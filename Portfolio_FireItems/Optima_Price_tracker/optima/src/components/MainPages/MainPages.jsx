import React, { Children } from 'react';
import Sidebar from './sidebar/Sidebar';
import DashboardMainPage from './DashboardMainPage/DashboardMainPage';
import styles from './mainPages.module.css';
const MainPages = (props) => {
	return (
		<div className={styles.mainPage}>
			<Sidebar></Sidebar>
			<DashboardMainPage></DashboardMainPage>
		</div>
	);
};

export default MainPages;
