import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
	const totalMax = Math.max(...dataPointValues); //Spread Operator: spreading out the values out of the array, ..to get the maximum value out
	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					label={dataPoint.label}
					maxValue={totalMax}
				></ChartBar>
			))}
		</div>
	);
};

export default Chart;
