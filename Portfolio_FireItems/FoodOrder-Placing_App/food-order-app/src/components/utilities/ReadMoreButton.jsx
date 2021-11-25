import React, { useContext } from 'react';
import styles from './readMoreButton.module.css';
import { ModalReadMoreCtx } from '../../App';

const ReadMoreButton = (props) => {
	const ModalReadMoreOpen = useContext(ModalReadMoreCtx);
	return (
		<React.Fragment>
			<div className={styles.readMoreBox}>
				<button
					className={styles.ReadMoreButton}
					// onClick={ModalReadMoreOpen.showReadModal}
					onClick={ModalReadMoreOpen.showReadModal}
				>
					Read More
				</button>
			</div>
		</React.Fragment>
	);
};

export default ReadMoreButton;
