import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TotoInput';

function App() {
    const [list, setList] = useState([]);

    function handlerTodoList(todo) {
        setList(
            [
                ...list,
                todo
            ]
        )
    }

    const todoList = list.map((todo, index) => {
        return <TodoItem key={index} label={todo} />
    });

    return (
        <>
            <div className="py-20 w-1/3 mx-auto">
                <h1 className="mb-10 text-3xl font-bold text-center">React todoist</h1>
                <div className="flex flex-col gap-y-12">
                    <TodoInput onSubmit={handlerTodoList} />
                    <div className="flex flex-col gap-y-4">
                        <h2 className="text-xl">Todo list</h2>
                        {todoList}
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h2 className="text-xl">Complete list</h2>
                        <div className="flex flex-col gap-y-4">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
