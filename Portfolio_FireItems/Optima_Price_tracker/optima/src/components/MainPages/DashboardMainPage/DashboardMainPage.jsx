import React from 'react';
import styles from './dashboardMainPage.module.css';
import FilterSec from './FilterSec/FilterSec';
import CalendarDataSec from './CalendarDataSec/CalendarDataSec';

const DashboardMainPage = () => {
	return (
		<div className={styles.DashboardMainPage}>
			<FilterSec></FilterSec>
			<CalendarDataSec></CalendarDataSec>
		</div>
	);
};

export default DashboardMainPage;
