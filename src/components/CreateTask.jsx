import React, { useState } from 'react';

const CreateTask = (props) => {
	const [value, setValue] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!value) return;

		props.addTask(value);
		setValue('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					className='input'
					value={value}
					placeholder='Add task'
					onChange={(event) => setValue(event.target.value)}
				/>
			</form>
		</div>
	);
};

export default CreateTask;
