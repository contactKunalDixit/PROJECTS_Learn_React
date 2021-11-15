import React from 'react';
import styles from './slideMenu.module.css';

const SlideMenu = () => {
	return (
		<div className={styles.SlideMenu}>
			<div className={styles.Wrapper}>
				<ul className={styles.ulist}>
					<li className={styles.list}>Burgers</li>
					<li className={styles.list}>Drinks</li>
					<li className={styles.list}>Salads</li>
					<li className={styles.list}>Combos</li>
				</ul>
			</div>
		</div>
	);
};

export default SlideMenu;
