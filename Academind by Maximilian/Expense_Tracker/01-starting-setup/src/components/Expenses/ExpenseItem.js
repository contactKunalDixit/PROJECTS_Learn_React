import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
	return (
		<li>			{/* 1 */}
			<Card className='expense-item'>
				<ExpenseDate date={props.date} />
				<div className='expense-item__description'>
					<h2>{props.title}</h2>
				</div>
				<div className='expense-item__price'>${props.amount}</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;

// ! This component also happens to be a 'stateless' aka 'presentational' aka 'Dumb' component because it doesnt have any internal state. Its just there to output/ return some data

/*
!   1.
*   Since we are rendering the 'ExpensesList' as an HTML element UL, in order to keep semantic sanctity, we should encapsulate the component <Expenseitem> as an <li>, thjeus making corresponding changes in ExpenseItem.js
 */