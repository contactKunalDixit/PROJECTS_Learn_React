import React, { useContext } from 'react';
import styles from './navbarCartButton.module.css';
import { ModalContext } from '../App';

import cart_Context from '../store_context/cart_Context';

const NavbarCartButton = (props) => {
	const CartOpen = useContext(ModalContext);
	const cartCtx = useContext(cart_Context);
	const noOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);
	return (
		<React.Fragment>
			<button
				className={styles.button}
				// onClick={props.onShowCart}
				onClick={CartOpen.showFunc}
			>
				<span>Cart</span>
				<span className={styles.badge}>{noOfCartItems}</span>
			</button>
		</React.Fragment>
	);
};

export default NavbarCartButton;
