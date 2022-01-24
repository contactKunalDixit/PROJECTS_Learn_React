import React from 'react';
import styles from '../App.module.css';
const TextError = (props) => {
	return <div className={styles.error}>{props.children}</div>;
};

export default TextError;
