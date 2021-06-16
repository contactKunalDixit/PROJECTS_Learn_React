import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import './components/Expenses/Expenses.css';
import NewExpense from './components/NewExpense/NewExpense';

const Dummy_Expenses = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
	{
		id: 'e5',
		title: 'Mac Computer',
		amount: 1990,
		date: new Date(2021, 12, 24),
	},
];
const App = () => {
	const [expenses, setExpenses] = useState(Dummy_Expenses);

	const addExpenseHandler = (placeHolderItem) => {
		// setExpenses([placeHolderItem, ...expenses]);  /* *This is not the most approporiate way, refer to the below alternative */
		setExpenses((prevSnapshot) => {
			return [placeHolderItem, ...prevSnapshot];
		});
	};
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler}></NewExpense>
			<div className='expenses'>
				<Expenses itemData={expenses} />
			</div>
		</div>
	);
};

export default App;

/*
 * If a new expense record(initiated in ExpenseForm.js and flowing through NewExpense.js, ) has to be added to the existing array "Dummy_Expenses", It has to be through state management since amending the variable simply(Daummy_Expenses) would not be registered in React environement.
 * Thus, we capture the existing snapshot of the state in 'expenses'
 * and then for adding an instance of a new Expense, we use setExpense().
 * ALSO since our new snapshot of the state shall be based on previous snapshot of this state(aka react variable), we need to pass a function with prevSnapshot being the arguement.
 * This way, React ensures it only picks the latest previous snapshot to update the variable (aka state) with new records/ updates.
 */
