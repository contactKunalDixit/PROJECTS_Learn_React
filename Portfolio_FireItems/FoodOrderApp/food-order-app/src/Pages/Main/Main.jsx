import React from 'react';
import styles from './main.module.css';
const Main = () => {
	return (
		<div className={styles.Main}>
			<div className={styles.wrapper}>
				<div className={styles.top}>
					<h1>FIND HAPPINESS WITH OUR GOURMET BURGERS</h1>
				</div>
				<div className={styles.bottom}>
					<h3>MAKE A RESERVATION AT THE BEST BURGER BAR</h3>
				</div>
			</div>
		</div>
	);
};
export default Main;
