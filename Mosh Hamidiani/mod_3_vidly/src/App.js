import './App.css';
import Movies from '../src/components/movies';
import NavBar from '../src/components/navBar';
function App() {
	return (
		<div className='App'>
			<main className='container'>
				<NavBar></NavBar>
				<Movies></Movies>
			</main>
		</div>
	);
}

export default App;
