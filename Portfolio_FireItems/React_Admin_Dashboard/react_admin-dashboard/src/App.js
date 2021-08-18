import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';

import styles from './App.module.css';
function App() {
	return (
		<div>
			<TopBar></TopBar>
			<div className={styles.container}>
				<Sidebar className={styles.sidebar}></Sidebar>
				<div className={styles.otherPiece}> This is a temporary piece</div>
			</div>
		</div>
	);
}

export default App;
