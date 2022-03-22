import React from 'react';
import './Task.css';

const Task = (props) => {
	return (
		<div
			className='task'
			style={{ textDecoration: props.task.completed && 'line-through' }}
		>
			{props.task.title}
			<button
				style={{ background: 'red' }}
				onClick={() => props.removeTask(props.index)}
			></button>
			<button onClick={() => props.completeTask(props.index)}>Complete</button>
		</div>
	);
};

export default Task;
