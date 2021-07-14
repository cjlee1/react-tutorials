import React from 'react';
import { useForm } from './useForm';

function expensiveInitialState() {
	return 10;
}

const App = () => {
	// const [{count,count2},setCount] =  useState({count:10,count2:20});
	const [ values, handleChange ] = useForm({ email: '', password: '' });
	const [ values2, handleChange2 ] = useForm({ firstName: '', lastName: '' });

	return (
		<div>
			<input name="email" value={values.email} onChange={handleChange} />
			<input name="password" type="password" value={values.password} onChange={handleChange} />
			<input name="firstName" value={values2.firstName} onChange={handleChange2} />
			<input name="lastName" value={values2.lastName} onChange={handleChange2} />
			<div>
				<p>Your email is: {values.email}</p>
				<p> your pass is: {values.password}</p>
				<p>
					Your name is: {values2.firstName} {values2.lastName}
				</p>
			</div>
		</div>
	);
};
export default App;
