import { useState } from 'react';
import style from './App.module.css';

export const App = () => {
	const [str, setStr] = useState('');
	const [arr, setArr] = useState([
		{ id: 2, value: '456' },
		{ id: 1, value: '789' },
	]);

	const handleClickText = () => {
		setStr('123456');
	};

	const handleClickArr = () => {
		setArr([...arr, { id: 1, value: '123' }]);
	};

	if (str) {
		return <h1>Первое условие</h1>;
	}

	return (
		<div className={style.app}>
			<h1>App</h1>
			<button onClick={handleClickText}>SetText</button>
			{str && <h1>{str}</h1>}
			<button onClick={handleClickArr}>Set Arr</button>
			{arr.length > 0 && (
				<ul>
					{arr.map((item) => (
						<li key={item.id}>{item.value}</li>
					))}
				</ul>
			)}
		</div>
	);
};
