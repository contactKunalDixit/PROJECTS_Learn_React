import React, { useState } from 'react';
import Header from './components/Header';
import './';
import Tasks from './components/Tasks';

const App = () => {
	const _tasks = [
		{
			id: 1,
			text: "Doctor's Appointment",
			day: 'Feb 5th at 2:30pm',
			reminder: true,
		},
		{
			id: 2,
			text: 'Meeting at School',
			day: 'Feb 6th at 1:30pm',
			reminder: true,
		},
		{
			id: 3,
			text: 'Food Shopping',
			day: 'Feb 5th at 3:30pm',
			reminder: false,
		},
	];

	const [tasks, setTasks] = useState(_tasks);
	const [value, setValue] = useState(false);

	// Delete a task
	const delTask = (item) => {
		console.log(item);
		const data = tasks.filter((i) => i.id !== item.id);
		setTasks(data);
	};

	// Toggle Reminder
	const toggleReminder = (item) => {
		console.log(item);
	};
	return (
		<div className='container'>
			<Header></Header>
			{tasks.length !== 0 ? (
				<Tasks tasks={tasks} onDelete={delTask} onToggle={toggleReminder} />
			) : (
				<h4>All the tasks have been completed. Please add more to the list</h4>
			)}
		</div>
	);
};

export default App;
