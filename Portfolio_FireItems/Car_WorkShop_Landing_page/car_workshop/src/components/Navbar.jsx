import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.left}>Car Workshop</div>
			<div className={styles.right}>
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
