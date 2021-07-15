import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { useFetch } from './useFetch';
import { useMeasure } from './useMeasure';

export const Hello = () => {
	const renders = useRef(0);

	const [ count, setCount ] = useState(() => JSON.parse(localStorage.getItem('count')));
	const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
	useEffect(
		() => {
			localStorage.setItem('count', JSON.stringify(count));
		},
		[ count ]
	);

	// same as useMeasure
	// const divRef =useRef();

	// const [rect,setRect]= useState({});
	// useLayoutEffect(()=>{
	//     setRect(divRef.current.getBoundingClientRect());
	// }
	// ,[data]);
	const [ rect, divRef ] = useMeasure([ data ]);
	// console.log('hello renders: ', renders.current++);
	return (
		<div>
			<div style={{ display: 'flex' }}>
				<div ref={divRef}> {!data ? 'loading...' : data}</div>
			</div>
			<pre>{JSON.stringify(rect, null, 2)}</pre>
			<div> Count ({count})</div>
			<button
				onClick={() => {
					setCount(count + 1);
				}}>
				+
			</button>
		</div>
	);
};
