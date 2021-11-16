import React, { useState } from 'react';
import styles from './navbar.module.css';
import { MdFastfood } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearchAlt } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import SlideMenu from './SlideMenu';

const Navbar = () => {
	const [menu, setMenu] = useState(false);

	const ToggleMenu = () => {
		console.log(menu, 'button has been clicked');
		setMenu(!menu);
	};
	return (
		<div className={styles.navbar}>
			<div className={styles.navbar_left}>
				<MdFastfood style={{ fontSize: '48px' }}></MdFastfood>
			</div>
			<div className={styles.navbar_center}>
				<form>
					<input
						type='text'
						id={styles.userInput}
						name='userInput'
						placeholder='Search your item here..'
					/>
				</form>
				<BiSearchAlt
					style={{ fontSize: '22px', backgroundColor: 'transparent' }}
				/>
			</div>
			<div className={styles.navbar_right}>
				<button onClick={ToggleMenu} id={styles.menuButton}>
					<GiHamburgerMenu
						style={{
							display: !menu ? 'block' : 'none',
							fontSize: '30px',
						}}
					/>
					<GrClose
						style={{
							display: menu ? 'block' : 'none',
							fontSize: '28px',
						}}
					/>
				</button>
			</div>
			{menu && <SlideMenu />}
		</div>
	);
};

export default Navbar;
