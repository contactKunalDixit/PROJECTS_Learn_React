import React from 'react';

const Header = (props) => {
	return (
		<div>
			<h1>Project: {props.title}</h1>
		</div>
	);
};

Header.defaultProps = {
	title: 'Task Tracker',
};

export default Header;
