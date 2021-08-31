import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
	return (
		<div className={`${styles.container}`}>
			<div className={`${styles.wrapper}`}>
				<div className={styles.containerLeft}>
					<span className={styles.logo}>
						<h1>DigiHut.</h1>
					</span>

					<ul className={styles.menuGroup}>
						<li className={styles.menuItem}>Home</li>
						<li className={styles.menuItem}>Features</li>
						<li className={styles.menuItem}>Services</li>
						<li className={styles.menuItem}>Pricing</li>
						<li className={styles.menuItem}>Contact</li>
					</ul>
				</div>
				<div className={styles.containerRight}>
					<button className={styles.buttonRight}>Join today</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
