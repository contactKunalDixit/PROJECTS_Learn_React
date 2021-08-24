import TopBar from './components/topbar/TopBar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/pages/home/Home';
import UserList from './components/pages/userList/UserList';
import ProductList from './components/pages/productList/ProductList';
import { Switch, Route } from 'react-router-dom';
import User from './components/pages/SpecificUser/User';
import NewUser from './components/pages/newUserPage/NewUser';
import Product from './components/pages/SpecificProduct/Product';
import NewProduct from './components/pages/newProductPage/NewProduct';

function App() {
	return (
		<div>
			<TopBar></TopBar>
			<div style={{ display: 'flex', marginTop: '10px' }}>
				<Sidebar></Sidebar>
				<Switch>
					<Route path='/newUser'>
						<NewUser></NewUser>
					</Route>
					<Route path='/user/:userId'>
						<User />
					</Route>
					<Route path='/users'>
						<UserList />
					</Route>

					<Route path='/products'>
						<ProductList />
					</Route>
					<Route path='/newProduct'>
						<NewProduct></NewProduct>
					</Route>
					<Route path='/product/:productId'>
						<Product />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;
