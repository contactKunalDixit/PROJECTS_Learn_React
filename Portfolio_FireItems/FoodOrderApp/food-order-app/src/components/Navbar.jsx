import React from 'react';
import styles from './navbar.module.css';
import { MdFastfood } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbar_left}>
				<MdFastfood style={{ fontSize: '48px' }}></MdFastfood>
			</div>
			<div className={styles.navbar_center}>
				<form action=''>
					<input type='text' id='userInput' name='userInput' />
				</form>
			</div>
			<div className={styles.navbar_right}>
				<GiHamburgerMenu style={{ fontSize: '30px' }} />
			</div>
		</div>
	);
};

export default Navbar;
