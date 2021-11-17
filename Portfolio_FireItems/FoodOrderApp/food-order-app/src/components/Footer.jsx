import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.left}>Home Delivery</div>
				<div className={styles.center}>Mob: +90909090</div>
				<div className={styles.right}>&copy;KD</div>
			</div>
		</div>
	);
};

export default Footer;
