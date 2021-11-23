import React from 'react';
import styles from './navbarCartButton.module.css';
const NavbarCartButton = (props) => {
	return (
		<React.Fragment>
			<button className={styles.button} onClick={props.onShowCart}>
				<span>Cart</span>
				<span className={styles.badge}>3</span>
			</button>
		</React.Fragment>
	);
};

export default NavbarCartButton;
