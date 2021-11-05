import styles from './App.module.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
	return (
		<div className={styles.App}>
			<Navbar></Navbar>
			<div className={styles.Sections}>
				<Main></Main>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
