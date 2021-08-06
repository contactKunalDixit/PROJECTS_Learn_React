import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className='header'>
			<h1>{title}</h1>

			<Button
				color='green'
				onClickAdd={onAdd}
				text={showAdd ? 'close' : 'Add'}
			></Button>
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
