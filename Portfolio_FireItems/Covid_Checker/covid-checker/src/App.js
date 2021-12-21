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
				<p>
					Enter your date range period and this app shall apprise you of your
					status
				</p>

				<ul className={styles.ulist}>
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
				<form action='/action_page.php' method='get'>
					<label for='fname'>First name:</label>
					<input type='text' id='fname' name='fname' placeholder='First Name' />
					<br />

					<label for='lname'>Last name: </label>
					<input type='text' id='lname' name='lname' placeholder='Last Name' />
					<br />
					<label for='dateRangeStart'>Date Period Start </label>
					<input
						type='date'
						id='dateRangeStart'
						name='dateRangeStart'
						placeholder='Start Date'
					/>
					<br />
					<label for='dateRangeEnd'>Date Period End </label>
					<input
						type='date'
						id='dateRangeEnd'
						name='dateRangeEnd'
						placeholder='End Date'
					/>
					<br />
					<label for='Testing Dates'>Testing Dates</label>
					<input type='date' id='Testing Dates' name='TestingDates' />
					<br />

					<input type='submit' value='Submit' />
				</form>
			</section>
		</div>
	);
}

export default App;
