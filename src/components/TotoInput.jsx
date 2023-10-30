/* eslint-disable react/prop-types */
import { useState } from 'react';

function TodoInput({ handleAddTask }) {
	const [text, setText] = useState('');

	function submitTask(e) {
		e.preventDefault();
		handleAddTask(text);
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
			<button
				className="block border py-1 px-3 h-8 border-black bg-green-500 text-white"
				type="submit"
			>
				Submit
			</button>
		</form>
	);
}

export default TodoInput;
