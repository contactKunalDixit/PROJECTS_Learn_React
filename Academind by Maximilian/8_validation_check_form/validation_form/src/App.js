import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import './App.css';
import UsersList from './components/Users/UsersList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUsersHandler = (uName, uAge) => {
		setUsersList((prevUsersList) => {
			return [...prevUsersList, { name: uName, age: uAge }];
		});
	};
	return (
		<div>
			<AddUser onAddUser={addUsersHandler} />
			<UsersList users={usersList} />
		</div>
	);
}

export default App;
