import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {
	let barFillHeight = '0%'; // we have assigned a string because of it being rendered as a css dynamic style

	if (props.maxValue > 0) {
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
	}
	return (
		<div className='chart-bar'>
			<div className='chart-bar__inner'>
				<div
					className='chart-bar__fill'
					style={{ height: barFillHeight }}
				></div>
			</div>
			<div className='chart-bar__label'>{props.label}</div>
		</div>
	);
};

export default ChartBar;

// *1 Adding style CSS dynamically:
// Components can have style attribute which only accepts an JS object and since we are adding it dynamically, hence an extra pair of curly braces
