import React, { useState } from 'react';
import styles from './navbar.module.css';
import { MdFastfood } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearchAlt } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import NavbarItemCarousel from './navbarItemCarousel';
import NavbarCartButton from './NavbarCartButton';

const Navbar = (props) => {
	return (
		<header className={styles.navbar}>
			<div className={styles.Sec1}>
				<div className={styles.navbar_left}>
					<p>Table No. 121</p>
				</div>
				<div className={styles.navbar_center}>
					<h1> Expériences divines</h1>
				</div>
				<div className={styles.navbar_right}>
					<NavbarCartButton onShowCart={props.onShowCart} />
				</div>
			</div>
			<div className={styles.Sec2}>
				<NavbarItemCarousel />
			</div>
		</header>
	);
};

export default Navbar;
