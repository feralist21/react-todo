import { useState } from 'react';
import TodoButton from './TodoButton';
import TodoCheckbox from './TodoCheckbox';

function TodoItem() {
    const [value, setCheckbox] = useState(false);

    return (
        <div className="flex gap-x-4">
            <TodoCheckbox
                value={value}
                checked={value}
                onChange={() => setCheckbox(!value)}
            />
            <p>Текст задачи</p>
            <TodoButton className="text-xs" view="accent" size="small">
                Х
            </TodoButton>
        </div>
    );
}

export default TodoItem;
