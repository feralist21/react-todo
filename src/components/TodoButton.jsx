/* eslint-disable react/prop-types */
import { clsx } from 'clsx';

export default function TodoButton({
    className,
    children,
    onClick,
    type = 'button',
    view,
    size,
    ...rest
}) {
    return (
        <>
            <button
                className={clsx(className, {
                    'bg-green-500 text-white': view === 'accent',
                    'bg-white border border-gray-500': view === 'stroke',
                    'py-3 px-4': size === 'medium',
                    'py-5 px-6': size === 'big',
                    'py-1 px-2': size === 'small',
                })}
                type={type}
                onClick={onClick}
                {...rest}
            >
                {children}
            </button>
        </>
    );
}
