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
                className={clsx(className, 'font-normal rounded-md', {
                    'bg-violet-600 text-white hover:bg-violet-700': view === 'accent',
                    'bg-white border border-gray-500': view === 'stroke',
                    'py-1 px-1 text-xs': size === 'small',
                    'py-2 px-2 text-base': size === 'medium',
                    'py-3 px-3 text-lg': size === 'big',
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
