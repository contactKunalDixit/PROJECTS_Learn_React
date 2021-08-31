import Navbar from './components/navbar/Navbar';
import styles from './app.module.css';
import Intro from './components/Intro/Intro';
import Features from './components/features/Features';

function App() {
	return (
		<>
			<div className={styles.container}>
				<Navbar />
				<Intro />
			</div>
			<div className={styles.container}>
				<Features />
			</div>
		</>
	);
}

export default App;
