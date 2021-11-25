import React, { useState } from 'react';
import './App.module.css';
import Navbar from './components/Navbar';
import ToastiItem from './components/Toasti_Item';
import SlideMenu from './components/SlideMenu';
import Main from './Pages/Main/Main';
import Footer from './components/Footer';
import styles from './App.module.css';
import Burgers from './Pages/Prod_burgers/Burgers';
import Drinks from './Pages/Prod_drinks/Drinks';
import Cart from './components/Cart';
import CartProvider from './store_context/cartProvider';

import ProductInfoModal from './components/ProductInfoModal';

export const ModalContext = React.createContext();
export const ModalReadMoreCtx = React.createContext();

function App() {
	const [CartisShown, setCartisShown] = useState(false);
	const [ModalReadMoreShows, setModalReadMoreShows] = useState(false);

	const showCartHandler = () => {
		setCartisShown(true);
	};
	const hideCartHandler = () => {
		setCartisShown(false);
	};

	const showModalReadMore = () => {
		setModalReadMoreShows(true);
	};
	const hideModalReadMore = () => {
		// console.log('WORKS');
		setModalReadMoreShows(false);
	};

	return (
		<div className={styles.wrapper}>
			<ToastiItem />
			<CartProvider>
				<div className={styles.App}>
					<ModalContext.Provider
						value={{
							dataState: CartisShown,
							showFunc: showCartHandler,
							hideFunc: hideCartHandler,
						}}
					>
						<ModalReadMoreCtx.Provider
							value={{
								dataState: ModalReadMoreShows,
								showReadModal: showModalReadMore,
								hideReadModal: hideModalReadMore,
							}}
						>
							<Navbar
							// onShowCart={showCartHandler}
							/>
							{CartisShown && <Cart onClose={hideCartHandler} />}
							{/* It doesnt matter where we place the 'Cart' because it is being handled through Portal whose opening has been placed in the HTML file  */}

							{ModalReadMoreShows && <ProductInfoModal />}
							<Main />
						</ModalReadMoreCtx.Provider>
					</ModalContext.Provider>
				</div>
			</CartProvider>

			{/* </div> */}
		</div>
	);
}

export default App;
