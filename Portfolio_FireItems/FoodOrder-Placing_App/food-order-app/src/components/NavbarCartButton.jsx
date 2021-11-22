import React from 'react';
import styles from './navbarCartButton.module.css';
const NavbarCartButton = () => {
	return (
		<React.Fragment>
			<button className={styles.button}>
				<span>Cart</span>
				<span className={styles.badge}>3</span>
			</button>
		</React.Fragment>
	);
};

export default NavbarCartButton;
