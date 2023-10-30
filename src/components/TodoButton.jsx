/* eslint-disable react/prop-types */
import { clsx } from 'clsx';

export default function TodoButton({ label, type = 'button', view }) {
	return (
		<>
			<button
				className={clsx({
					'bg-green-500 text-white': view === 'accent',
					'bg-white border border-gray-500': view === 'stroke',
				})}
				type={type}
			>
				{label}
			</button>
		</>
	);
}
