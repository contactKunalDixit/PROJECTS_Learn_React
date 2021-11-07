import React from 'react';
import styles from './main.module.css';

const Main = () => {
	return (
		<div
			className={styles.main}
			style={{
				backgroundImage:
					'url(' +
					'https://raw.githubusercontent.com/contactKunalDixit/Proj8_PU_Automotive_car_Design/main/guille-sanchez-9nxrdT2SMCg-unsplash%20(1).jpg' +
					')',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		></div>
	);
};

export default Main;
