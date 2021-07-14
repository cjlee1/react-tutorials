import React, { useState, useEffect } from 'react';

function expensiveInitialState() {
	return 10;
}

const App = () => {
	// const [{count,count2},setCount] =  useState({count:10,count2:20});
	const [ count, setCount ] = useState(10);
	const [ count2, setCount2 ] = useState(20);

	return (
		<div>
			<div>count 1: {count}</div>
			<div>count 2: {count2}</div>
			<button
				onClick={() => {
					setCount((c) => c + 1);
					setCount2((c) => c + 1);
				}}>
				+
			</button>
			<input name="email" />
			<input name="password" type="password" />
		</div>
	);
};
export default App;
