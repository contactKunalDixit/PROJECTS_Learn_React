import React, { useState } from 'react';
import styles from './navbar.module.css';
import { MdFastfood } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearchAlt } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import NavbarItemCarousel from './navbarItemCarousel';

const Navbar = (props) => {
	return (
		<div className={styles.navbar}>
			<div className={styles.Sec1}>
				<div className={styles.navbar_left}>
					<p>Table No. 121</p>
				</div>
				<div className={styles.navbar_center}>
					<h1>
						{' '}
						Expériences <span className={styles.titleItal}>divines</span>
					</h1>
				</div>
				<div className={styles.navbar_right}>
					<p>View bill</p>
				</div>
			</div>
			<div className={styles.Sec2}>
				<NavbarItemCarousel />
			</div>
		</div>
	);
};

export default Navbar;
