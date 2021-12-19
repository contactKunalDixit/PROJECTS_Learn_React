import React from 'react';
import styles from './charts.module.css';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
const Charts = ({ title, data, dataKey, grid }) => {
	return (
		<div className={styles.chart}>
			<h3 className={styles.chartTitle}>{title}</h3>

			<ResponsiveContainer width='100%' aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey='name' stroke='#5550bd' />
					{grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}

					<YAxis />
					<Tooltip />

					<Line
						type='monotone'
						dataKey={dataKey}
						stroke='#8884d8'
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Charts;
