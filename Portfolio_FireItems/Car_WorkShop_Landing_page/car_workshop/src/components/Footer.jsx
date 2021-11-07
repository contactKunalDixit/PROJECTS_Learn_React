import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.left}>&copy; KunalD.</div>
			<div className={styles.right}>Ctc: +65 90301206</div>
		</div>
	);
};

export default Footer;
