import React from 'react';
import styles from './animatedShapes.module.css';

const AnimatedShapes = () => {
	return (
		<>
			<div className={styles.square}></div>
			<div className={styles.circle}></div>
			<div className={styles.rectangle}></div>
		</>
	);
};

export default AnimatedShapes;
