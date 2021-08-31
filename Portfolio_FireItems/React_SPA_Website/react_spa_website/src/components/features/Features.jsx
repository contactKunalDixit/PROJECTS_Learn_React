import React from 'react';
import styles from './features.module.css';
import AnimationShapes from '../AnimatedShapes/AnimatedShapes';
const Features = () => {
	return (
		<div className={styles.featureContainer}>
			<div className={styles.leftSide}>
				<img className={styles.AppImg} src='assets/App.png' alt='' />
			</div>
			<div className={styles.rightSide}>
				<div className={styles.title}>
					<div className={styles.title1}>
						<h1>
							<span>good </span>
							design
						</h1>
					</div>
					<div className={styles.title2}>
						<h1>
							<span>good </span>
							business
						</h1>
					</div>
				</div>
				<div className={styles.subTitle}>
					We know that good design means good business.
				</div>

				<div className={styles.desc}>
					We help our clients succeed by creating brand identities, digital
					experiences, and print materials that communicate clearly, achieve
					marketing goals, and look fantastic.
				</div>
				<div className={styles.subTitle}>
					{' '}
					We care your business and guarantee you to achieve marketing goals.
				</div>

				<button className={styles.Button}>Learn More</button>
				<AnimationShapes></AnimationShapes>
				<div className={styles.introShape}></div>
			</div>
		</div>
	);
};

export default Features;
