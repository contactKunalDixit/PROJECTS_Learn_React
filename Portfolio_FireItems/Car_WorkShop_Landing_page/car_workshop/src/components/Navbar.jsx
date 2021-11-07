import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.left}>Car Workshop</div>
			<div className={styles.right}>
				<ul className={styles.ul}>
					<li className={styles.li}>
						{' '}
						<a href='#bookings'></a> Bookings
					</li>
					<li className={styles.li}>
						{' '}
						<a href='#About'></a> About Us
					</li>
					<li className={styles.li}>
						{' '}
						<a href='#contact'></a> Contact Us
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
