import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	/*
	! We can use multiple useState statements

	! We can use and have multiple State slices or useState pieces per component. And then, all these multiple different states would then also be totally seperated and independent of  each other.
	The above 3 state slices would not impact each other while we use them.	
	*/

	// ! The ExpenseForm.js component here manages the 'input' state
	// ! The state recieves an (optional) state value as an argument.
	// ! Calling 'useState' again will NOT update the state value but will simply create a new state.
	// ! useState always returns an array with exactly two elements - 1st element captures initial state value; 2nd element is a function that can be called to set a new value for the 'state'. Calling that function also triggers React to re-valuate the component.

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		console.log(event.target.value);
	};
	// ! Though setEnteredTitle(): would update and store the new value in 'enteredTitle' state; our intention at this point is to use it to capture temporarily the value being entered by the user. This is a good way to log snaps of subsequent values that will be entered. The aim is to have a way to store the subsequent values in a variable which is also detached to the entire lifecycle of this very component function, so that not matter how often  this component function will execute again, this state is stored and survives the reexecutions .

	// ! The aim is to have the user enetered value captured in through the setEnteredTitile function and then call the function again with ('') parameters but only after having an object created to permanently store the values user entered in the first place.

	// ! This type of functionality is important when you'd like to reset the blanks to thier initial values.

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		console.log(event.target.value);
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	/*
	ALso, we could have alternatiely used a single object approach instead of the multiple slices approach as seen above.
	But then we need to be mindfull of the approach by which we update the previous state with the user's new Value.

	The SYNTAX to follow when our state update is based the previous state (another e.g. could be like in case of number increment)
	, When updating new State based on past state, It could happen that React picks up a wrong past state, just because the new updates are scheduled for future when using setEnteredTitle()
	Thus to ensure, React picks up the latest previous State and not some distant previuos state, use the beloow "Function form" syntax:
	Where prevState is passed as an arguement by React

	const [userInput,setUserInput]=useState({
	enteredTitle:"",
	enteredAmount:"",
	enteredDate:""
	});


 BAD SYNTAX

setEnteredTitle({
	...prevState,
	enteredTitle:event.target.value
})


GOOD SYNTAX: 	
setEnteredTitle((prevState)=>{
return {...prevState, enteredTitle:event.target.value}
})

An anonymous arrow function is being passed Where: prevStat points to the object and its 'state' as defined above.
*/

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		console.log(expenseData);
		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
		// ! 2 way binding: We not only listen to changes in the input to update our state (through setEnteredTitle()) but we also feed the state back into the input(through default attribute 'value'), so that when we change the state, we also change the input.
	};
	// ! 2 way binding: means that for 'input's, we are not only listening for changes BUT ALSO, we can pass a new value back into the input, Hence changing the input value programatically.

	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className='new-expense__controls'>
					<div className='new-expense__control'>
						<label>Title</label>
						<input
							type='text'
							value={enteredTitle}
							onChange={titleChangeHandler}
						/>
					</div>
					<div className='new-expense__control'>
						<label>Amount</label>
						<input
							type='number'
							min='0.01'
							step='0.01'
							value={enteredAmount}
							onChange={amountChangeHandler}
						/>
					</div>
					<div className='new-expense__control'>
						<label>Date</label>
						<input
							type='date'
							min='2019-01-01'
							max='2022-12-31'
							value={enteredDate}
							onChange={dateChangeHandler}
						/>
					</div>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expenses</button>
				</div>
			</form>
		</div>
	);
};

export default ExpenseForm;

/* 
!: We can create our own event props, where we expect functions as values and that would allow us to pass a function from a PARENT component to a CHILD component, and then call that function inside of a CHILD component. 

!: and then, when we call that component, we can ofcourse pass data to this function as a parameter, and that's how we can communincate up...from CHILD to PARENT.
*/
