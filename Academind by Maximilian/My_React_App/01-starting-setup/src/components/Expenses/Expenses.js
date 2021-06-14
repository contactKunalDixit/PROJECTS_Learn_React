import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020');

	// ! The Expenses component here manages the 'filter' state hence its also called as 'Statefull' component aka 'Smart' components.

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
		console.log(selectedYear);
	};
	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{props.itemData.map((i) => {
					/* Using array.map(), we are transforming each item in the array 'props.itemData, to a new array with each item having trasnformed into a JSX elements */
					return (
						<ExpenseItem title={i.title} date={i.date} amount={i.amount} />
					);
				})}
			</Card>
		</div>
	);
}

export default Expenses;

// ! 'Stateless' aka 'Presentational' aka 'Dumb' components vs 'Statefull' aka 'Smart' components
//! Stateless components are those which doesnt have any state to manage. They are those which are just there to output/ return some data.
//! React applications will have more such components than 'statefull' components. Generally, the state is only managed by couple of components and then passed through to other components like in this case: Expenses.js is the 'Statefull' component and then the state is passed onto through props to other compnents like ExpenseFilter.js component.
