import React from 'react';
import './normalChart.scss';
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
const data = [
	{ Month: 'January', Revenue: 1200, Expenses: 1400 },
	{ Month: 'February', Revenue: 2100, Expenses: 1200 },
	{ Month: 'March', Revenue: 800, Expenses: 300 },
	{ Month: 'April', Revenue: 1600, Expenses: 1200 },
	{ Month: 'May', Revenue: 900, Expenses: 500 },
	{ Month: 'June', Revenue: 1700, Expenses: 700 },
];

const NormalChart = () => {
	return (
		<div className='normalChart'>
			<div className='title'>Past 6 Months Profits</div>
			<ResponsiveContainer width='100%' aspect={2 / 1}>
				{/* Original value of height i.e. height=100% has been changed to aspect ratio. Now when width will be say 100px, then height accordingly would be hald of it i.e. 50px */}

				<AreaChart
					width={730}
					height={230}
					data={data}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id='Revenue' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
						</linearGradient>
						<linearGradient id='Expenses' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#ca82c0' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#ca82c0' stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey='Month' stroke='gray' />
					<YAxis />
					<CartesianGrid strokeDasharray='3 3' className='chartGrid' />
					<Tooltip />
					<Area
						type='monotone'
						dataKey='Revenue'
						stroke='#1b1596'
						fillOpacity={1}
						fill='url(#Revenue)'
					/>
					<Area
						type='monotone'
						dataKey='Expenses'
						stroke='#b04927'
						fillOpacity={1}
						fill='url(#Expenses)'
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default NormalChart;
