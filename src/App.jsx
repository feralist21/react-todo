import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TotoInput';

function App() {
    const [list, setList] = useState([]);
    const [completedList, setcompletedList] = useState([]);

    function handlerTodoList(todo) {
        setList([...list, todo]);
    }

    function deleteTodoItem(todoName) {
        setList(list.filter((todo) => todo !== todoName));
    }

    function completedTodoItem(value) {
        deleteTodoItem(value);
        setcompletedList([...completedList, value]);
    }

    return (
        <>
            <div className="py-20 w-1/3 mx-auto">
                <h1 className="mb-10 text-3xl font-bold text-center">React todoist</h1>
                <div className="flex flex-col gap-y-12">
                    <TodoInput onSubmit={handlerTodoList} />
                    <div className="flex flex-col gap-y-4">
                        <h2 className="text-xl">Todo list</h2>
                        {list.map((todo, index) => (
                            <TodoItem
                                key={index}
                                label={todo}
                                onDelete={deleteTodoItem}
                                handlerComplete={completedTodoItem}
                                isComplete={false}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <h2 className="text-xl">Complete list</h2>
                        <div className="flex flex-col gap-y-4">
                            {completedList.map((todo, index) => (
                                <TodoItem key={index} label={todo} isComplete={true} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
