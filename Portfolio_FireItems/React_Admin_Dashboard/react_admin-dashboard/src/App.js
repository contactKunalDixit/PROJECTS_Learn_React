import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/pages/home/Home';
import styles from './App.module.css';
function App() {
	return (
		<div>
			<TopBar></TopBar>
			<div className={styles.container}>
				<Sidebar className={styles.sidebar}></Sidebar>
				<Home className={styles.otherPiece}> This is a temporary piece</Home>
			</div>
		</div>
	);
}

export default App;
