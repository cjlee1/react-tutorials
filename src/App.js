import React, { useState, useRef, useLayoutEffect } from 'react';
import { useForm } from './useForm';
import { Hello } from './Hello';
import { useMeasure } from './useMeasure';

function expensiveInitialState() {
	return 10;
}

const App = () => {
	// const [{count,count2},setCount] =  useState({count:10,count2:20});
	const [ values, handleChange ] = useForm({ email: '', name: '', password: '' });
	const [ values2, handleChange2 ] = useForm({ firstName: '', lastName: '' });

	const [ showHello, setShowHello ] = useState(true);

	// useLayoutEffect(()=>{
	//     console.log(inputRef.current.getBoundingClientRect());
	// }
	// ,[]);
	const inputRef = useRef(0); //giving reference to some react component  aand being able to use that somewhere in my application and imperatively call it
	const hello = useRef(() => console.log('hello'));
	// const [showHello,setShowHello]= useState(true);
	const [ rect, inputRef2 ] = useMeasure([]);
	console.log(rect);

	return (
		<div>
			<button onClick={() => setShowHello(!showHello)}> toggle</button>
			{showHello && <Hello />}
			<input ref={inputRef} name="email" placeholder="email" value={values.email} onChange={handleChange} />
			<input name="name" placeholder="name" value={values.name} onChange={handleChange} />

			<input
				name="password"
				placeholder="password"
				type="password"
				value={values.password}
				onChange={handleChange}
			/>
			<input name="firstName" ref={inputRef2} value={values2.firstName} onChange={handleChange2} />
			<input name="lastName" value={values2.lastName} onChange={handleChange2} />
			<div>
				<p>Your email is: {values.email}</p>
				<p> your pass is: {values.password}</p>
				<p>
					Your name is: {values2.firstName} {values2.lastName}
				</p>
			</div>
			<button
				onClick={() => {
					inputRef.current.focus();
					hello.current();
				}}>
				{' '}
				focus
			</button>
		</div>
	);
};
export default App;
