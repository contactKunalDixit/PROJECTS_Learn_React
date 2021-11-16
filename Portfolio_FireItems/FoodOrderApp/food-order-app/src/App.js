import './App.module.css';
import Navbar from './components/Navbar';
import ToastiItem from './components/Toasti_Item';
import Main from './Pages/Main/Main';

function App() {
	return (
		<div>
			<ToastiItem />
			<div className='App'>
				<Navbar />
				<Main />
			</div>
		</div>
	);
}

export default App;
