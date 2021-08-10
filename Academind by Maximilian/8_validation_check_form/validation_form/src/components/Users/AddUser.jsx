import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import style from './AddUser.module.css';
import Button from '../UI/Button';
const AddUser = (props) => {
	const [enteredUserName, setEnteredUserName] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const AddUserHandler = (e) => {
		e.preventDefault();
		console.log(enteredUserName, enteredAge);
	};

	useEffect(() => {
		setEnteredAge('');
		setEnteredUserName('');
	}, []);
	const userNameChangeHandler = (e) => {
		setEnteredUserName(e.target.value);
	};

	const userAgeChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};

	return (
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
	);
};

export default AddUser;
