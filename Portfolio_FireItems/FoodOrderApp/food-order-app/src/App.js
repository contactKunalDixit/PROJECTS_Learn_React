import './App.css';
import Navbar from './components/Navbar';
import ToastiItem from './components/Toasti_Item';

function App() {
	return (
		<div>
			<ToastiItem />
			<div className='App'>
				<Navbar />
			</div>
		</div>
	);
}

export default App;
