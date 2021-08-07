import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, onClickAdd, showAdd }) => {
	return (
		<div>
			<button
				style={{ backgroundColor: color }}
				className='btn'
				onClick={(e) => {
					onClickAdd(e);
				}}
			>
				{text}
			</button>
		</div>
	);
};

Button.defaultProps = {
	text: 'Add',
};

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClickAdd: PropTypes.func,
};
export default Button;
