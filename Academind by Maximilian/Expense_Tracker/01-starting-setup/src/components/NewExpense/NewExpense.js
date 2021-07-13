// *Adding a form - for recieving user Inputs

import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseDataPlaceHolder) => {
		const expenseData = {
			...enteredExpenseDataPlaceHolder,
			id: Math.random().toString(),
		};
		console.log(expenseData);
		props.onAddExpense(expenseData);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
			{/* 1 */}
		</div>
	);
};

export default NewExpense;

/* 
!	1.

* we are not executing the function 'saveExpenseDatahandler' above but rather just point to the function (which has also been defined a little over above)
* The funcction itself or the pointer to this function gets passed to the CHILD component 'ExpenseForm ' and then the function gets executed there, with the data that resides there, being passed as an arguement 
			
* This way, the data can be passed over from a CHILD to a PARENT component*/
