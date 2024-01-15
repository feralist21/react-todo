/* eslint-disable react/prop-types */
import { useState } from 'react';
import TodoButton from '@/TodoButton';
import TodoCheckbox from '@/TodoCheckbox';
import CloseIco from '~/src/assets/close.svg?react';
import EditIco from '~/src/assets/edit.svg?react';

function TodoItem({ label, onDelete, isComplete, handlerComplete }) {
    const [value, setCheckbox] = useState(false);

    function completeTodo() {
        setCheckbox(!value);
        handlerComplete(label);
    }

    return (
        <div className="flex gap-x-4 items-center bg-white rounded-md py-4 px-3">
            {!isComplete && <TodoCheckbox value={value} checked={value} onChange={completeTodo} />}
            <div className="flex-grow">
                <p className="">{label}</p>
                <p className="text-xs text-gray-500">18.01.2023</p>
            </div>
            {!isComplete && (
                <div className='flex gap-2 items-center'>
                    <TodoButton
                        view="stroke"
                        size="small"
                        onClick={() => {
                            onDelete(label);
                        }}
                    >
                        <CloseIco className="block w-4 h-4 fill-black" />
                    </TodoButton>
                    <TodoButton
                        view="stroke"
                        size="small"
                        onClick={() => {
                            onDelete(label);
                        }}
                    >
                        <EditIco className="block w-4 h-4 fill-black" />
                    </TodoButton>
                </div>
            )}
        </div>
    );
}

export default TodoItem;
