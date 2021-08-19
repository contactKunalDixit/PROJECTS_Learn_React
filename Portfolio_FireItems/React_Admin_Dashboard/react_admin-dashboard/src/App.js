import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/pages/home/Home';

function App() {
	return (
		<div>
			<TopBar></TopBar>
			<div style={{ display: 'flex' }}>
				<Sidebar></Sidebar>
				<Home> </Home>
			</div>
		</div>
	);
}

export default App;
