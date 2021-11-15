import './App.css';
import Navbar from './components/Navbar';
import SlideMenu from './components/SlideMenu';
import ToastiItem from './components/Toasti_Item';

function App() {
	return (
		<div>
			<ToastiItem />
			<div className='App'>
				<Navbar />
				<SlideMenu />
			</div>
		</div>
	);
}

export default App;
