import React from 'react';
import Task from './Task';
const Tasks = ({ tasks, onDelete, onToggle }) => {
	return (
		<>
			{tasks.map((item) => {
				return (
					<Task
						key={item.id}
						item={item}
						onDelete={onDelete}
						onToggle={onToggle}
					></Task>
				);
			})}
		</>
	);
};
export default Tasks;
