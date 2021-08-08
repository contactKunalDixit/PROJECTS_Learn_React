import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { Route } from 'react-router-dom';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
	const [tasks, setTasks] = useState([]);
	const [showAddTask, setShowAddTask] = useState(false);

	// Fetch Tasks from jsonServer API:
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks');
		const data = await res.json();
		return data;
	};

	useEffect(() => {
		const getData = async () => {
			const dataFromAPI = await fetchTasks();
			setTasks(dataFromAPI); // using setTasks() to reset it from an empty array to a new values flowing through from the fetch API functions
		};
		getData();
	}, []);

	// Add a task
	// const addTask = (task) => {
	// 'task' arguement would be an object here
	// const id = Math.floor(Math.random() * 1000) + 1;
	//
	/*commenting this out as we'd wont need an id. that's because the json server auto generates the id for us for each item */
	// let newTask = { id, ...task };
	// console.log(newTask);
	// let newTaskList = [...tasks, newTask];
	// setTasks(newTaskList);
	// }

	const addTask = async (task) => {
		const res = await fetch('http://localhost:5000/tasks', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(task),
		});
		const data = await res.json();
		setTasks([...tasks, data]); // The 'data' is a promised object which will just be the new entry that haas been added, Thus while calling setTasks() updater func, we destructure the old array first and then add the data object into it
	};

	// Delete a task
	const delTask = async (item) => {
		await fetch(`http://localhost:5000/tasks/${item.id}`, { method: 'DELETE' });
		console.log(item);
		const data = tasks.filter((i) => i.id !== item.id);

		setTasks(data);
	};

	// Toggle Reminder

	const toggleReminder = (item) => {
		console.log(item);
		const data = tasks.map((i) =>
			i.id === item.id ? { ...i, reminder: !i.reminder } : i
		);
		setTasks(data);
	};

	// const toggleReminder = async (id) => {
	// 	const taskToToggle = await fetchTasks(id);
	// 	const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

	// 	const res = await fetch(`http://localhost:5000/tasks/${id}`, {
	// 		method: 'PUT',
	// 		headers: { 'Content-type': 'application/json' },
	// 		body: JSON.stringify(updTask),
	// 	});

	// 	const data = await res.json();

	// 	setTasks(
	// 		tasks.map((task) =>
	// 			task.id === id ? { ...task, reminder: data.reminder } : task
	// 		)

	//ToggleAddButton

	const toggleAddButton = () => {
		setShowAddTask(!showAddTask);
	};
	return (
		<div className='container'>
			<Header onAdd={toggleAddButton} showAdd={showAddTask} />

			<Route
				path='/'
				exact
				render={(props) => {
					return (
						<>
							{showAddTask && <AddTask onAdd={addTask}></AddTask>}
							{tasks.length > 0 ? (
								<Tasks
									tasks={tasks}
									onDelete={delTask}
									onToggle={toggleReminder}
								/>
							) : (
								<h4>
									All the tasks have been completed. Please add more to the list
								</h4>
							)}
						</>
					);
				}}
			></Route>
			<Route path='/about' component={About}></Route>
			<Footer></Footer>
		</div>
	);
};

export default App;
