import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
	let [text, setText] = useState('');
	let [day, setDaynTime] = useState('');
	let [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		if (!text) {
			alert('Please add a Task');
			return;
		}
		onAdd({ text, day, reminder });
		setText('');
		setDaynTime('');
		setReminder(false);
	};

	return (
		<form className='add-form' onSubmit={onSubmit}>
			<div className='form-control'>
				<label>Task</label>
				<input
					type='text'
					placeholder='Add task'
					value={text}
					onChange={(e) => setText(e.target.value)}
				></input>
			</div>
			<div className='form-control'>
				<label>Day and Time</label>
				<input
					type='text'
					placeholder='Add Day n time'
					value={day}
					onChange={(e) => {
						setDaynTime(e.target.value);
					}}
				></input>
			</div>
			<div className='form-control-check'>
				<label>Set Reminder</label>
				<input
					type='checkbox'
					value={reminder}
					checked={reminder}
					onChange={(e) => {
						setReminder(e.currentTarget.checked);
					}}
				></input>
			</div>
			<input
				type='submit'
				value='Save Task'
				className='btn btn-block'
				onSubmit={onAdd}
			></input>
		</form>
	);
};

export default AddTask;
