import React from 'react';
import styles from './cart.module.css';
import Modal from './utilities/Modal';

const Cart = (props) => {
	const cartItems = (
		<ul className={styles['cart-items']}>
			{[{ id: '1', name: 'Item2', amount: '2', price: '12.99' }].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);
	return (
		<Modal style={{ height: '80vh' }} onClose={props.onClose}>
			<div className={styles.ModalCart}>
				{cartItems}
				<div className={styles.totalAmount}>
					<span>Total Amount</span>
					<span>35.62</span>
				</div>
				<div className={styles.actions}>
					<button className={styles['button--alt']} onClick={props.onClose}>
						Close
					</button>
					<button className={styles.button}>Order</button>
				</div>
			</div>
		</Modal>
	);
};

export default Cart;
