function TodoItem() {
	return (
		<div className="flex gap-x-4">
			<input className="block w-6 h-6" type="checkbox" name="checlbox" id="checlbox" />
			<p>Текст задачи</p>
			<button
				className="block border border-black w-6 h-6"
				type="button"
			>
				X
			</button>
		</div>
	);
}

export default TodoItem;
