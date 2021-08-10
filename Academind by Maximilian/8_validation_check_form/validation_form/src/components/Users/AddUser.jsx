import React, { useState } from 'react';
import Card from '../UI/Card';
import style from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
	const [enteredUserName, setEnteredUserName] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState(); // initially, the 'error' state is left 'null'
	const AddUserHandler = (e) => {
		e.preventDefault();

		if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid Input',
				message:
					'Please use alphabets in userName and number greater than 1 for your Age',
			});
			return;
		}
		if (+enteredAge < 1) {
			// converting the userinput which'll always be in string to a number by prefixing '+' operator
			setError({
				title: 'Invalid Input',
				message:
					'Please use alphabets in userName and number greater than 1 for your Age',
			});
			return;
		}
		console.log(enteredUserName, enteredAge);

		props.onAddUser(enteredUserName, enteredAge);
		setEnteredUserName('');
		setEnteredAge('');
	};

	const userNameChangeHandler = (e) => {
		setEnteredUserName(e.target.value);
	};

	const userAgeChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};
	return (
		<>
			{/* If 'error' is true, only then the ErrorModal would be rendered, Else Not */}
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				></ErrorModal>
			)}
			<Card className={style.input}>
				<form
					onSubmit={(e) => {
						AddUserHandler(e);
					}}
				>
					<label htmlFor='username'>UserName: </label>
					<input
						type='text'
						id='username'
						onChange={userNameChangeHandler}
						value={enteredUserName}
					></input>
					<label htmlFor='age'>Age(Years):</label>
					<input
						type='text'
						id='age'
						onChange={userAgeChangeHandler}
						value={enteredAge}
					></input>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;
