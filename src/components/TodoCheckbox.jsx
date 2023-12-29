/* eslint-disable react/prop-types */
import { clsx } from 'clsx';

function TodoCheckbox({ className, value, checked, onChange, disabled, ...attr }) {

    return (
        <input
            className={clsx(className, 'block w-6 h-6')}
            type="checkbox"
            value={value}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            {...attr}
        />
    );
}

export default TodoCheckbox;
