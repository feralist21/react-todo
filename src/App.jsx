import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoButton from './components/TodoButton';

function App() {
    const [list, setList] = useState(['first task', 'second task']);
    const [completedList, setcompletedList] = useState([]);

    function deleteTodoItem(todoName) {
        setList(list.filter((todo) => todo !== todoName));
    }

    function completedTodoItem(value) {
        deleteTodoItem(value);
        setcompletedList([...completedList, value]);
    }

    return (
        <>
            <div className="py-20 w-[800px] mx-auto">
                <h1 className="mb-10 text-5xl font-bold text-center uppercase">todo list</h1>
                <div className="flex flex-col gap-y-12">
                    <div className="flex justify-between gap-2">
                        <TodoButton view="accent" size="medium">
                            Add new task
                        </TodoButton>
                        <TodoButton view="accent" size="medium">
                            This is filter in future
                        </TodoButton>
                    </div>
                    <div className="flex flex-col gap-y-4 bg-slate-300 p-6 rounded-md">
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
                </div>
            </div>
        </>
    );
}

export default App;
