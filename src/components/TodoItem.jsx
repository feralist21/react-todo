/* eslint-disable react/prop-types */
import { useState } from 'react';
import TodoButton from './TodoButton';
import TodoCheckbox from './TodoCheckbox';

function TodoItem({ label, onDelete, isComplete, handlerComplete }) {
    const [value, setCheckbox] = useState(false);

    function completeTodo() {
        setCheckbox(!value);
        handlerComplete(label);
    }

    return (
        <div className="flex gap-x-4">
            {!isComplete && <TodoCheckbox value={value} checked={value} onChange={completeTodo} />}
            <p>{label}</p>
            {!isComplete && (
                <TodoButton
                    className="text-xs"
                    view="accent"
                    size="small"
                    onClick={() => {
                        onDelete(label);
                    }}
                >
                    Х
                </TodoButton>
            )}
        </div>
    );
}

export default TodoItem;
