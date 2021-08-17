import React, { useState } from 'react';

const Form = () => {
	const [uNameInput, setuNameInput] = useState('');
	const [uComments, setuComments] = useState('');
	const [uTopic, setuTopic] = useState('react');

	const userFeed = (e) => {
		console.log(e.target.value);
		setuNameInput(e.target.value);
	};

	const userComments = (e) => {
		console.log(e.target.value);
		setuComments(e.target.value);
	};
	const handleTopicChange = (e) => {
		console.log(e.target.value);
		setuTopic(e.target.value);
	};

	const userSubmit = (e) => {
		e.preventDefault();
		console.log({ uNameInput, uComments, uTopic });
	};
	return (
		<form onSubmit={userSubmit}>
			<div>
				<label htmlFor='uName'>UserName: </label>
				<input
					type='text'
					value={uNameInput}
					id='uName'
					onChange={(e) => {
						userFeed(e);
					}}
				></input>
			</div>
			<div>
				<label htmlFor='comments'>Comments: </label>
				<textarea
					value={uComments}
					id='comments'
					onChange={(e) => {
						userComments(e);
					}}
				></textarea>
			</div>
			<div>
				<label>Topic: </label>
				<select
					value={uTopic}
					onChange={(e) => {
						handleTopicChange(e);
					}}
				>
					<option value='react'>React</option>
					<option value='angular'>Angular</option>
					<option value='vue'>Vue</option>
				</select>
			</div>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default Form;
