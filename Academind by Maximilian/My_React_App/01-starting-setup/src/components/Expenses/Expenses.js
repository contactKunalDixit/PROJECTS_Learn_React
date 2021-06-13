import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020');

	// ! The Expenses component here manages the 'filter' state hence its also called as 'Statefull' component aka 'Smart' components.

	/* 
	!	React hooks are functions
	! 	all React hooks can be recognosed by the preFix 'use' 
	! 	Hooks can only be called directly within the component function and not outside. Also before the return statement. calling it after return statement would make it redundant and wouldnt make any sense
	!	Hooks can never be used within a nested function. like in  here, they cannot be used within 'filterChangeHandler'
	! 	useState() doesnt just work by itself. it NEEDS an INITIAL value. Any changes to this value (any changes to this current STATE) will make the component function to be called again and thus we should define that initial value to that variable.
	!	useState() HOOK ALWAYS RETURNS an ARRAY comprising of EXACTLY 2 elements. The 1st element gives access to the VARIABLE VALUE ITSELF and the second is an FUNCTION which is used to change the value and trigger a re-EVALUATION of the component itself.
	! 	The 1st element is just a pointer to that managed value (the current value which could be '' or initial value set by us, e.g '2020' as seen above) and the second element is the function named above as setFilteredYear which is used to change that initial value
	!	This function will do 2 things: 1st it will assign a new value (the arguemnt that is being passed) to the STATE aka the variable 'filteredYear' . 2nd, It'll also trigger REACT to re-EVALUATE the entire component again, thereby resetting all places where the state was being used, with the new value of the STATE. React will observe any changes it detects compared from the last time it evaluated this component and shows it on to the screen.


	* 	When to use hook - useState?
   
   	*	If you have data which might change and where that change needs to be reflected to the UI, Then we need STATE because regular variables will not do  the trick however with STATE variable, you can use a function which NOT only change the initial value of the state but ALSO trigger a re-EVALUATION of the entire component. Even if there would be multiple components, this re-evaluation only happens for the component in which this STATE was registered, and no other. 
	
	

	*/

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);					/* This function will do 2 things: 1st it will assign a new value (the arguemnt that is being passed) to the STATE aka the variable 'filteredYear' . 2nd, It'll also trigger REACT to re-EVALUATE the entire component again, thereby resetting all places where the state was being used, with the new value of the STATE
		React will observe any changes it detects compared from the last time it evaluated this component and shows it on to the screen
		*/
		/* 
		*  calling the setFilteredYear () MAY not change the value right away but rather SCHEDULES this STATE UPDATE to be executed and implemented post the re-EVALUATION cycle. 
 		*/
		
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
