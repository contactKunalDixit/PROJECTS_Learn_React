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
				<ExpenseItem
					title={props.itemData[0].title}
					date={props.itemData[0].date}
					amount={props.itemData[0].amount}
				/>
				<ExpenseItem
					title={props.itemData[1].title}
					date={props.itemData[1].date}
					amount={props.itemData[1].amount}
				/>
				<ExpenseItem
					title={props.itemData[2].title}
					date={props.itemData[2].date}
					amount={props.itemData[2].amount}
				/>
				<ExpenseItem
					title={props.itemData[3].title}
					date={props.itemData[3].date}
					amount={props.itemData[3].amount}
				/>
				<ExpenseItem
					title={props.itemData[4].title}
					date={props.itemData[4].date}
					amount={props.itemData[4].amount}
				/>
			</Card>
		</div>
	);
}

export default Expenses;

// ! 'Stateless' aka 'Presentational' aka 'Dumb' components vs 'Statefull' aka 'Smart' components
//! Stateless components are those which doesnt have any state to manage. They are those which are just there to output/ return some data.
//! React applications will have more such components than 'statefull' components. Generally, the state is only managed by couple of components and then passed through to other components like in this case: Expenses.js is the 'Statefull' component and then the state is passed onto through props to other compnents like ExpenseFilter.js component.
