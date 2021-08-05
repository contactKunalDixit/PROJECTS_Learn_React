import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({ title }) => {
	const onClickAdd = (e) => {
		console.log(e, 'Clicked');
	};
	return (
		<header className='header'>
			<h1>{title}</h1>

			<Button color='green' onClickAdd={onClickAdd}></Button>
		</header>
	);
};

Header.defaultProps = {
	title: 'Task Tracker',
};
Header.propTypes = {
	title: PropTypes.string,
};
export default Header;
