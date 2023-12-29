/* eslint-disable react/prop-types */
import { useState } from 'react';
import TodoButton from './TodoButton';

function TodoInput({onSubmit}) {
    const [text, setText] = useState('');

    function addTodoItem(e) {
        e.preventDefault();
        onSubmit(text);
        setText('');
    }

    return (
        <form className="w-full flex gap-x-4 items-end" onSubmit={addTodoItem}>
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
            <TodoButton className="text-xs" type="submit" view="accent" size="medium">
                Submit
            </TodoButton>
        </form>
    );
}

export default TodoInput;
