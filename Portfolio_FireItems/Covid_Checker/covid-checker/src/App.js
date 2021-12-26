// import './App.css';

import styles from './App.module.css';
import FormCovid1 from './component/FormCovid1';

function App() {
	return (
		<div className={styles.app}>
			<header className={styles.app_header}>
				<h1>Covid Checker</h1>
				<h3>Check your eligibility for returning to office</h3>
			</header>
			<section>
				<h4>Instructions:</h4>
				<p>
					ABC corporation would like all its employees to do ART tests regularly
					to avoid the risk of Covid transmission within workplace.
				</p>
				<p>
					Enter your date range period and this app shall apprise you of your
					status
				</p>

				<ul className={styles.ulist}>
					<h4>Conditions to qualify:</h4>
					<li>
						YoutubeFormYupFormikCompoments 1. Every employee must take at least
						two tests in a week,not later than 3 or 4 days from previous test
					</li>
					<li>
						2. If a test is taken on 4th day from previous test, the next test
						must be taken within 3 days.
					</li>
				</ul>
			</section>
			<section>
				<FormCovid1 />
			</section>
		</div>
	);
}

export default App;
