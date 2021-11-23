import React, { useContext } from 'react';
import styles from './navbarCartButton.module.css';
import { CartContext } from '../App';

const NavbarCartButton = (props) => {
	const CartOpen = useContext(CartContext);
	return (
		<React.Fragment>
			<button
				className={styles.button}
				// onClick={props.onShowCart}
				onClick={CartOpen.showFunc}
			>
				<span>Cart</span>
				<span className={styles.badge}>3</span>
			</button>
		</React.Fragment>
	);
};

export default NavbarCartButton;
