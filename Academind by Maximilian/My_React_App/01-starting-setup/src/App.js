import React from 'react';
import Expenses from './components/Expenses/Expenses';
import './components/Expenses/Expenses.css';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
	const expenses = [
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
	const saveNewExpenseDataHandler = (placeHolder) => {
		const newExpenseData = {
			...placeHolder,
		};
		console.log(newExpenseData);
	};
	return (
		<div>
			<NewExpense onSaveNewExpenseData={saveNewExpenseDataHandler}></NewExpense>
			<div className='expenses'>
				<Expenses itemData={expenses} />
			</div>
		</div>
	);
};

export default App;
