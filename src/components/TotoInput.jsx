function TodoInput() {
	return (
		<div className="flex gap-x-4 items-end">
			<div className="w-40">
				<label className="block w-full" htmlFor="text">
					Введите имя задачи
				</label>
				<input
					className="block py-1 px-3 w-full h-8 border border-black"
					type="text"
					name="text"
					id="text"
				/>
			</div>
			<button className="block border py-1 px-3 h-8 border-black bg-green-500 text-white" type="button">
				Ok
			</button>
		</div>
	);
}

export default TodoInput;
