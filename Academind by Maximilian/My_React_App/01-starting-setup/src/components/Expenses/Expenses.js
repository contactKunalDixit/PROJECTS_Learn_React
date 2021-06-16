import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2020'); /* 1 */

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear); /* 2 */

		console.log(selectedYear);
	};

	const filteredExpenses = props.itemData.filter((i) => {
		return i.date.getFullYear().toString() === filteredYear;
	});

	/* 3 */

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>

				{/* {props.itemData.map((i) => {  Switching from this to below */}
				{filteredExpenses.map((i) => {
					/* 4 */
					return (
						<ExpenseItem
							key={i.id}
							title={i.title}
							date={i.date}
							amount={i.amount}
						/>
					);
				})}
			</Card>
		</div>
	);
}

export default Expenses;

/* 5 */

/*
!	1.

	* The Expenses component here manages the 'filter' state hence its also called as 'Statefull' component aka 'Smart' components.

 
	* 	all React hooks can be recognosed by the preFix 'use' 
	* 	Hooks can only be called directly within the component function and not outside. Also before the return statement. calling it after return statement would make it redundant and wouldnt make any sense
	*	React hooks are functions
	*	Hooks can never be used within a nested function. like in  here, they cannot be used within 'filterChangeHandler'
	* 	useState() doesnt just work by itself. it NEEDS an INITIAL value. Any changes to this value (any changes to this current STATE) will make the component function to be called again and thus we should define that initial value to that variable.
	*	useState() HOOK ALWAYS RETURNS an ARRAY comprising of EXACTLY 2 elements. The 1st element gives access to the VARIABLE VALUE ITSELF and the second is an FUNCTION which is used to change the value and trigger a re-EVALUATION of the component itself.
	* 	The 1st element is just a pointer to that managed value (the current value which could be '' or initial value set by us, e.g '2020' as seen above) and the second element is the function named above as setFilteredYear which is used to change that initial value
	*	This function will do 2 things: 1st it will assign a new value (the arguemnt that is being passed) to the STATE aka the variable 'filteredYear' . 2nd, It'll also trigger REACT to re-EVALUATE the entire component again, thereby resetting all places where the state was being used, with the new value of the STATE. React will observe any changes it detects compared from the last time it evaluated this component and shows it on to the screen.


	* 	When to use hook - useState?
   
   	*	If you have data which might change and where that change needs to be reflected to the UI, Then we need STATE because regular variables will not do  the trick however with STATE variable, you can use a function which NOT only change the initial value of the state but ALSO trigger a re-EVALUATION of the entire component. Even if there would be multiple components, this re-evaluation only happens for the component in which this STATE was registered, and no other. 
	*/

/*
 !	2.
This function will do 2 things: 1st it will assign a new value(the arguemnt that is being passed) to the STATE aka the variable 'filteredYear'. 2nd, It'll also trigger REACT to re-EVALUATE the entire component again, thereby resetting all places where the state was being used, with the new value of the STATE
		React will observe any changes it detects compared from the last time is evaluated this component and shows it on to the screen
*  calling the setFilteredYear () MAY not change the value right away but rather SCHEDULES this STATE UPDATE to be executed and implemented post the re-EVALUATION cycle.
*/

/* 
	 !	3
	 *	The above function filters and gives a new array with the items that qualified for the condition passed in funtion form, as an argument. It doesnt effects the original array.
	 */

/*
	 !	4.
	  
	* Using array.map(), we are transforming each item in the array 'props.itemData, to a new array with each item having trasnformed into a JSX elements...Thus handling it dyna,ically */

/*
!	5.

* 'Stateless' aka 'Presentational' aka 'Dumb' components vs 'Statefull' aka 'Smart' components
* Stateless components are those which doesnt have any state to manage. They are those which are just there to output/ return some data.
* React applications will have more such components than 'statefull' components. Generally, the state is only managed by couple of components and then passed through to other components like in this case: Expenses.js is the 'Statefull' component and then the state is passed onto through props to other compnents like ExpenseFilter.js component.

/*
Key prop (with its value equivalent to a unique ID) has been added as to ensure React recognises which specific element in the list should it be updating rather than, having React to work itself and scan the entire long list and seek which element has been added off late. 

Though this key prop can be added anywhere but it should definately be added where you are RENDERING the LIST. like in this instance in the Expenses.js because its here that the component 'Expenses' is being defined within which the LIST gets rendered.

This is effecient and time saving as React would not have to unnecessary scan the list 
Most of the times, when dealing with databases, we should be able to identify which should be that unique ID that can be used as a 'key' for React to make use of it for unique identification. But in case, no unique ID is available, then we can provide 'index' as a second arguement in map which then can be used in place of 'id'.


props.itemData.map((i,index) => {
				
					return (
						<ExpenseItem
							key={i.index}
							title={i.title}
							date={i.date}
							amount={i.amount}
						/>
					);
				})}
 */
