import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

const ExpensesList = (props) => {
   
 

    if (props.items.length === 0) {
        return (<h2 className = "expenses-list__fallback">Found No Expenses</h2>)
    }
	

    return <ul className="expenses-list">   {/* 1 */}
        {props.items.map((i) => (
        <ExpenseItem
            key={i.id}
            title={i.title}
            date={i.date}
            amount={i.amount}
        />
         ))}

</ul>
}

export default ExpensesList;

/*
!   1.
*   Since we are rendering the 'ExpensesList' as an HTML element UL, in order to keep semantic sanctity, we should encapsulate the component <Expenseitem> as an <li>, thjeus making corresponding changes in ExpenseItem.js
 */