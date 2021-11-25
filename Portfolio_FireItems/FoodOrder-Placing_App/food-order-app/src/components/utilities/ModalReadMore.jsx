import React, { useContext } from 'react';
import styles from './modalReadMore.module.css';
import { ModalReadMoreCtx } from '../../App';
import ReactDOM from 'react-dom';

const BackdropReadMore = (props) => {
	const ModalReadMoreClose = useContext(ModalReadMoreCtx);
	return (
		<div
			className={styles.backdrop}
			onClick={ModalReadMoreClose.hideReadModal}
		></div>
	);
};

const ModalOverlayReadMore = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlaysModalReadMore');

const ModalReadMore = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(<BackdropReadMore />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlayReadMore>{props.children}</ModalOverlayReadMore>,
				portalElement
			)}
		</React.Fragment>
	);
};

export default ModalReadMore;
