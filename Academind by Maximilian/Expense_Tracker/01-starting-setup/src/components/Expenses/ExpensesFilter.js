import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
	const dropDownChangeHandler = (event) => {
		console.log(event.target.value);
		props.onChangeFilter(event.target.value);
	};

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select value={props.selected} onChange={dropDownChangeHandler}>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;

/*

*	Note : 

* The ExpensesFilter.js is just a component which just constitutes to the UI and presentation of the Filter functionality. Its functionality is just limited to ccapturing the 'event', when it happens.
* It is a component which comprises of few listeners and Props

* The the 'event' is passed up as an argument to the parent component Expenses.js through the use of props, after which the selected value is recieved from the parent component to ExpensesFilter.js through the 2 way binding


* the actual logic resides in the parent compnonet

*: Both the selected value as well as the function which handles the selected value are both not part of the 'ExpensesFilter.js' but its parent component i.e. 'Expenses.js'.
*  This is what makes ExpensesFilter.js a 'controlled component' because it is being controlled by parent component. Techanically, it doesnt make any difference anywhere BUT in the terms of understanding the mechanism, it just means that both the 'value' and the 'changes to the value' are not controlled by the component itself , but in a parent component.

* 'Stateless' aka 'Presentational' aka 'Dumb' components vs 'Statefull' aka 'Smart' components
* Stateless components are those which doesnt have any state to manage. They are those which are just there to output/ return some data.

* React applications will have more such components than 'statefull' components. Generally, the state is only managed by couple of components and then passed through to other components like in this case: Expenses.js is the 'Statefull' component and then the state is passed onto through props to other compnents like ExpenseFilter.js component.
*/
