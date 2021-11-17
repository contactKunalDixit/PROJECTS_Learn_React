import React, { useState } from 'react';
import './App.module.css';
import Navbar from './components/Navbar';
import ToastiItem from './components/Toasti_Item';
import SlideMenu from './components/SlideMenu';
import Main from './Pages/Main/Main';
import Footer from './components/Footer';
import styles from './App.module.css';
import Burgers from './Pages/Prod_burgers/Burgers';

function App() {
	const [menu, setMenu] = useState(false);

	const ToggleMenu = () => {
		console.log(menu, 'button has been clicked');
		setMenu(!menu);
	};
	return (
		<div className={styles.wrapper}>
			<ToastiItem />
			{/* <div className={styles.wrapper}> */}
			<div className={styles.App}>
				<Navbar menu={menu} ToggleMenu={ToggleMenu} />
				{menu && <SlideMenu />}
				{/* <Main /> */}
				<Burgers />
				<Footer />
			</div>
			{/* </div> */}
		</div>
	);
}

export default App;
