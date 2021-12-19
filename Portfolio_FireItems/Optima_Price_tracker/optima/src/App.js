import styles from './App.module.css';
import TopBar from './components/topbar/TopBar';
import MainPages from './components/MainPages/MainPages';
function App() {
	return (
		<div className={styles.App}>
			<TopBar></TopBar>
			<MainPages></MainPages>
		</div>
	);
}

export default App;
