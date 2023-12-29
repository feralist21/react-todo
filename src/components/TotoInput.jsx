/* eslint-disable react/prop-types */
import { useState } from 'react';
import TodoButton from './TodoButton';

function TodoInput() {
	const [text, setText] = useState('');

	function submitTask(e) {
		e.preventDefault();
		console.log(`submit task text - ${text}`);
		setText('');
	}

	return (
		<form className="w-full flex gap-x-4 items-end" onSubmit={submitTask}>
			<div className="w-auto flex-grow">
				<label className="block" htmlFor="text">
					Add task
				</label>
				<input
					className="block py-1 px-3 w-full h-8 border border-black"
					type="text"
					name="text"
					id="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<TodoButton type='submit' view='accent' size='medium'>
				Submit
			</TodoButton>
		</form>
	);
}

export default TodoInput;
