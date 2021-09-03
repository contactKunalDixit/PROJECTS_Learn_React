import React from 'react';
import styles from './intro.module.css';
import AnimatedShapes from '../AnimatedShapes';

const Intro = () => {
	return (
		<div className={styles.introContainer}>
			<div className={styles.left}>
				<h1 className={styles.title}>Adventures in creative age</h1>
				<p className={styles.desc}>
					We believe that designing products and services in close partnership
					with our clients is the only way to have a real impact on thier
					business
				</p>

				<div className={styles.info}>
					<button className={styles.infoButton}>Start a Project</button>
					<div className={styles.contact}>
						<p className={styles.phone}>Call us at (012) 345 - 6789</p>
						<div className={styles.phoneText}>For any question or concerns</div>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.introShape}></div>
				<img
					className={styles.rightImage}
					src='assets/surprised-young-asia_success.png
					'
					alt=''
				/>
			</div>
			<AnimatedShapes />
		</div>
	);
};

export default Intro;
