import { useState, useEffect } from 'react';
import Task from './Task';
import CreateTask from './CreateTask';
import './Todo.css';

const Todo = () => {
	const [tasksRemaining, setTasksRemaining] = useState(0);

	const [tasks, setTasks] = useState([
		{
			title: 'task one',
			completed: true,
		},
		{
			title: 'task two',
			completed: true,
		},
		{
			title: 'task three',
			completed: false,
		},
	]);

	useEffect(() => {
		setTasksRemaining(tasks.filter((task) => !task.completed).length);
	}, [tasks]);

	const addTask = (title) => {
		const newTask = [...tasks, { title, completed: false }];
		setTasks(newTask);
	};

	const completeTask = (index) => {
		const newTasks = [...tasks];
		newTasks[index].completed = true;
		setTasks(newTasks);
	};

	const removeTask = (index) => {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	};

	return (
		<div className='todo-container'>
			<div className='header'>Pending tasks ({tasksRemaining})</div>
			<div className='tasks'>
				{tasks.map((task, index) => (
					<Task
						task={task}
						index={index}
						completeTask={completeTask}
						removeTask={removeTask}
						key={index}
					/>
				))}
			</div>
			<div className='create-task'>
				<CreateTask addTask={addTask} />
			</div>
		</div>
	);
};

export default Todo;
