import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
			</div>
			<div className='expense-item__price'>${props.amount}</div>
		</Card>
	);
};

export default ExpenseItem;

// ! This component also happens to be a 'stateless' aka 'presentational' aka 'Dumb' component because it doesnt have any internal state. Its just there to output/ return some data
