import { useLayoutEffect, useRef, useState } from 'react';

export const useMeasure = (deps) => {
	const myRef = useRef();

	const [ rect, setRect ] = useState({});
	useLayoutEffect(() => {
		// console.log(myRef.current.getBoundingClientRect());
		setRect(myRef.current.getBoundingClientRect());
	}, deps);
	return [ rect, myRef ];
};
