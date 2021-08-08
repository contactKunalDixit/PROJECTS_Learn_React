import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAdd, showAdd }) => {
	const location = useLocation();

	return (
		<header className='header'>
			<h1>{title}</h1>

			{location.pathname === '/' && (
				<Button
					color={showAdd ? 'red' : 'green'}
					onClickAdd={onAdd}
					text={showAdd ? 'close' : 'Add'}
					showAdd={showAdd}
				></Button>
			)}
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

// UseLocation hook: helps you to exercise a condition..the 'Add' button only appears when the location.pathname==="/" and will be absent for any other path
