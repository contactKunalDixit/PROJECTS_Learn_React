import React from 'react';
import styles from './widgetLg.module.css';

const WidgetLg = () => {
	const ButtonLG = ({ type }) => {
		return (
			<button className={`${styles.widgetLgButton} ${type}`}>{type}</button>
		);
	};
	return (
		<div className={styles.widgetLg}>
			<span className={styles.widgetLgTitle}>Latest Transactions</span>
			<table classNAme={styles.widgetLgTable}>
				<tr className={styles.widgetLgTr}>
					<th className={styles.widgetLgTh}>Customer</th>
					<th className={styles.widgetLgTh}>Date</th>
					<th className={styles.widgetLgTh}>Amount</th>
					<th className={styles.widgetLgTh}>Status</th>
				</tr>
				<tr className={styles.widgetLgTr}>
					<td className={styles.widgetLgUser}>
						<img
							src='https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?cs=srgb&dl=pexels-anastasia-shuraeva-5704720.jpg&fm=jpg'
							alt=''
							className={styles.widgetLgImg}
						/>
						<span classname={styles.widgetLgName}>Susan Carol</span>
					</td>
					<td className={styles.widgetLgDate}>2 Jun 2021</td>
					<td className={styles.widgetLgAmount}>$122.00</td>
					<td className={styles.widgetLgStatus}>
						<ButtonLG type={'Approved'} />
					</td>
				</tr>
				<tr className={styles.widgetLgTr}>
					<td className={styles.widgetLgUser}>
						<img
							src='https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?cs=srgb&dl=pexels-anastasia-shuraeva-5704720.jpg&fm=jpg'
							alt=''
							className={styles.widgetLgImg}
						/>
						<span classname={styles.widgetLgName}>Susan Carol</span>
					</td>
					<td className={styles.widgetLgDate}>2 Jun 2021</td>
					<td className={styles.widgetLgAmount}>$122.00</td>
					<td className={styles.widgetLgStatus}>
						<ButtonLG type={'Declined'} />
					</td>
				</tr>
				<tr className={styles.widgetLgTr}>
					<td className={styles.widgetLgUser}>
						<img
							src='https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?cs=srgb&dl=pexels-anastasia-shuraeva-5704720.jpg&fm=jpg'
							alt=''
							className={styles.widgetLgImg}
						/>
						<span classname={styles.widgetLgName}>Susan Carol</span>
					</td>
					<td className={styles.widgetLgDate}>2 Jun 2021</td>
					<td className={styles.widgetLgAmount}>$122.00</td>
					<td className={styles.widgetLgStatus}>
						<ButtonLG type={'Pending'} />
					</td>
				</tr>
				<tr className={styles.widgetLgTr}>
					<td className={styles.widgetLgUser}>
						<img
							src='https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?cs=srgb&dl=pexels-anastasia-shuraeva-5704720.jpg&fm=jpg'
							alt=''
							className={styles.widgetLgImg}
						/>
						<span classname={styles.widgetLgName}>Susan Carol</span>
					</td>
					<td className={styles.widgetLgDate}>2 Jun 2021</td>
					<td className={styles.widgetLgAmount}>$122.00</td>
					<td className={styles.widgetLgStatus}>
						<ButtonLG type={'Approved'} />
					</td>
				</tr>
				<tr className={styles.widgetLgTr}>
					<td className={styles.widgetLgUser}>
						<img
							src='https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?cs=srgb&dl=pexels-anastasia-shuraeva-5704720.jpg&fm=jpg'
							alt=''
							className={styles.widgetLgImg}
						/>
						<span classname={styles.widgetLgName}>Susan Carol</span>
					</td>
					<td className={styles.widgetLgDate}>2 Jun 2021</td>
					<td className={styles.widgetLgAmount}>$122.00</td>
					<td className={styles.widgetLgStatus}>
						<ButtonLG type={'Approved'} />
					</td>
				</tr>
			</table>
		</div>
	);
};

export default WidgetLg;
