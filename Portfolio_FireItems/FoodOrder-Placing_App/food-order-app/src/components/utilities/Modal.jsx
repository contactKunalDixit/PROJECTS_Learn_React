import React, { Fragment, useContext } from 'react';
import styles from './modal.module.css';
import ReactDOM from 'react-dom';

import { CartContext } from '../../App';

const Backdrop = (props) => {
	const CartClose = useContext(CartContext);

	return (
		<div
			className={styles.backdrop}
			// onClick={props.onClose}
			onClick={CartClose.hideFunc}
			// ContextAPI being used
		></div>
	);
};
const ModalOverlay = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};
const portalElement = document.getElementById('overlays');
const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
};

export default Modal;
