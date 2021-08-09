import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
const AddUser = (props) => {
	const AddUserHandler = (e) => {
		e.preventDefault();
	};

	return (
		<Card className={classes.input}>
			<form
				onSubmit={(e) => {
					AddUserHandler(e);
				}}
			>
				<label htmlFor='username'>UserName: </label>
				<input type='text' id='username'></input>
				<label htmlFor='age'>Age(Years):</label>
				<input type='text' id='age'></input>
				<button type='submit'>Add User</button>
			</form>
		</Card>
	);
};

export default AddUser;
