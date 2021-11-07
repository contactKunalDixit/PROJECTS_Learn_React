import styles from './App.module.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
	return (
		<div className={styles.App}>
			<div className={styles.AppWrapper}>
				<Navbar></Navbar>
				{/* <div className={styles.Sections}> */}
				<Main />
				<Footer />
				{/* </div> */}
			</div>
		</div>
	);
}

export default App;
