// import './App.css';
import styles from './App.module.css';
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
				<p>Enter your date range period</p>
				<p></p>
				<ul>
					<h4>Conditions to qualify:</h4>
					<li>
						1. Every employee must take at least two tests in a week,not later
						than 3 or 4 days from previous test
					</li>
					<li>
						2. If a test is taken on 4th day from previous test, the next test
						must be taken within 3 days.
					</li>
				</ul>
			</section>
			<section>
				<form></form>
			</section>
		</div>
	);
}

export default App;
