import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import New from './pages/new/New.jsx';
import UserList from './pages/list/UserList.jsx';
import ProdList from './pages/list/ProdList';
import Single from './pages/single/Single.jsx';
import NotFound from './pages/notFound/NotFound.jsx';
import { userInputs, productInputs } from './formSource';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/'>
						<Route index element={<Home />} />
						<Route path='login' element={<Login />} />
						<Route path='users'>
							<Route index element={<UserList />} />
							<Route path=':userId' element={<Single />} />
							<Route
								path='new'
								element={<New inputs={userInputs} title='Add New User' />}
							/>
						</Route>
						<Route path='products'>
							<Route index element={<ProdList />} />
							<Route path=':productId' element={<Single />} />
							<Route
								path='new'
								element={<New inputs={productInputs} title='Add New Product' />}
							/>
						</Route>
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
