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
	{
		Month: 'January',
		Revenue: 1200,
		Expense: 1400,
		Profit: -200,
	},
	{ Month: 'February', Revenue: 2100, Expense: 1200, Profit: 900 },
	{ Month: 'March', Revenue: 800, Expense: 300, Profit: 500 },
	{ Month: 'April', Revenue: 1400, Expense: 1300, Profit: 100 },
	{ Month: 'May', Revenue: 900, Expense: 500, Profit: 400 },
	{ Month: 'June', Revenue: 1700, Expense: 700, Profit: 1000 },
];

const NormalChart = () => {
	return (
		<div className='normalChart'>
			<div className='title'>Past 6 Months Sales Performance</div>
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
						<linearGradient id='Expense' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#ca82c0' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#ca82c0' stopOpacity={0} />
						</linearGradient>
						<linearGradient id='Profit' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='5%' stopColor='#a4f299' stopOpacity={0.8} />
							<stop offset='95%' stopColor='#b0e4b3' stopOpacity={0} />
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
						dataKey='Expense'
						stroke='#b04927'
						fillOpacity={1}
						fill='url(#Expense)'
					/>
					<Area
						type='monotone'
						dataKey='Profit'
						stroke='#072f11'
						fillOpacity={1}
						fill='url(#Profit)'
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
};

export default NormalChart;
