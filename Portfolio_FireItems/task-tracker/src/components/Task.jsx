import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ item, onDelete, onToggle }) => {
	return (
		<div
			className='task'
			onDoubleClick={() => {
				onToggle(item);
			}}
		>
			<h3>
				{item.text}
				<FaTimes
					style={{ color: 'red', cursor: 'pointer' }}
					onClick={() => {
						onDelete(item);
					}}
				></FaTimes>
			</h3>
			<p>{item.day}</p>
		</div>
	);
};

export default Task;
