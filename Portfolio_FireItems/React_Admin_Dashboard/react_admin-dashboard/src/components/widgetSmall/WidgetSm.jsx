import React from 'react';
import styles from './widgetSm.module.css';
import { Visibility } from '@material-ui/icons';

const WidgetSm = () => {
	return (
		<div className={styles.widgetSm}>
			<span className={styles.widgetSmTitle}>New Join Members</span>
			<ul className={styles.widgetSmList}>
				<li className={styles.widgetSmListItem}>
					<img
						src='https://images.pexels.com/photos/8417206/pexels-photo-8417206.jpeg?cs=srgb&dl=pexels-shvets-production-8417206.jpg&fm=jpg'
						alt=''
						className={styles.widgetSmImg}
					/>
					<div className={styles.widgetSmUser}>
						<span className={styles.widgetSmUserName}>Anna Shultz</span>
						<span className={styles.widgetSmUserTitle}>Software Developer</span>
					</div>
					<button className={styles.widgetSmButton}>
						<Visibility fontSize='small' style={{ marginRight: '5px' }} />
						Display
					</button>
				</li>
				<li className={styles.widgetSmListItem}>
					<img
						src='https://images.pexels.com/photos/8417206/pexels-photo-8417206.jpeg?cs=srgb&dl=pexels-shvets-production-8417206.jpg&fm=jpg'
						alt=''
						className={styles.widgetSmImg}
					/>
					<div className={styles.widgetSmUser}>
						<span className={styles.widgetSmUserName}>Anna Shultz</span>
						<span className={styles.widgetSmUserTitle}>Software Developer</span>
					</div>
					<button className={styles.widgetSmButton}>
						<Visibility fontSize='small' style={{ marginRight: '5px' }} />
						Display
					</button>
				</li>
				<li className={styles.widgetSmListItem}>
					<img
						src='https://images.pexels.com/photos/8417206/pexels-photo-8417206.jpeg?cs=srgb&dl=pexels-shvets-production-8417206.jpg&fm=jpg'
						alt=''
						className={styles.widgetSmImg}
					/>
					<div className={styles.widgetSmUser}>
						<span className={styles.widgetSmUserName}>Anna Shultz</span>
						<span className={styles.widgetSmUserTitle}>Software Developer</span>
					</div>
					<button className={styles.widgetSmButton}>
						<Visibility fontSize='small' style={{ marginRight: '5px' }} />
						Display
					</button>
				</li>
				<li className={styles.widgetSmListItem}>
					<img
						src='https://images.pexels.com/photos/8417206/pexels-photo-8417206.jpeg?cs=srgb&dl=pexels-shvets-production-8417206.jpg&fm=jpg'
						alt=''
						className={styles.widgetSmImg}
					/>
					<div className={styles.widgetSmUser}>
						<span className={styles.widgetSmUserName}>Anna Shultz</span>
						<span className={styles.widgetSmUserTitle}>Software Developer</span>
					</div>
					<button className={styles.widgetSmButton}>
						<Visibility fontSize='small' style={{ marginRight: '5px' }} />
						Display
					</button>
				</li>
			</ul>
		</div>
	);
};

export default WidgetSm;
