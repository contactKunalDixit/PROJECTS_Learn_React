import React from 'react';
import './userChart.scss';
import {
	AreaChart,
	ComposedChart,
	Legend,
	Area,
	XAxis,
	YAxis,
	Line,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Bar,
} from 'recharts';
const data = [
	{ Month: 'January', Spending: 1200, Units_Purchased: 700, Balance_Due: 500 },
	{
		Month: 'February',
		Spending: 2100,
		Units_Purchased: 1300,
		Balance_Due: 500,
	},
	{ Month: 'March', Spending: 800, Units_Purchased: 500, Balance_Due: 400 },
	{ Month: 'April', Spending: 1400, Units_Purchased: 800, Balance_Due: 500 },
	{ Month: 'May', Spending: 900, Units_Purchased: 300, Balance_Due: 300 },
	{ Month: 'June', Spending: 1700, Units_Purchased: 1000, Balance_Due: 500 },
];

const NormalChart = () => {
	return (
		<div className='normalChart'>
			<div className='normalChartTopBar'>
				<div className='title'>Past 6 Months Spending</div>
			</div>

			<ResponsiveContainer width='100%' aspect={2 / 1}>
				{/* Original value of height i.e. height=100% has been changed to aspect ratio. Now when width will be say 100px, then height accordingly would be hald of it i.e. 50px */}

				<ComposedChart
					width={730}
					height={230}
					data={data}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<XAxis dataKey='Month' />
					<YAxis />
					<Tooltip />
					<Legend />
					<CartesianGrid stroke='#f5f5f5' />
					<Area
						type='monotone'
						dataKey='Spending'
						fill='#8884d8b3'
						stroke='#8884d8'
					/>
					<Bar dataKey='Units_Purchased' barSize={20} fill='#413ea0' />

					<Line type='monotone' dataKey='Balance_Due' stroke='#ff7300' />
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	);
};

export default NormalChart;
