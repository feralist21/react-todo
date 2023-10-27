import Container from './components/Container';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TotoInput';

function App() {
	return (
		<>
			<div className="py-20">
				<Container>
					<h1 className="mb-10 text-3xl font-bold text-center">React todoist</h1>
					<div className="flex flex-col gap-y-12">
						<TodoInput />
						<div className="flex flex-col gap-y-4">
							<h2 className="text-xl">Список задач</h2>
							<TodoItem />
						</div>
						<div className="flex flex-col gap-y-4">
							<h2 className="text-xl">Выполненные задачи</h2>
							<div className="flex flex-col gap-y-4">
								<TodoItem />
								<TodoItem />
								<TodoItem />
								<TodoItem />
								<TodoItem />
							</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}

export default App;
