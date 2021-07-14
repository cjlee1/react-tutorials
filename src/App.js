import React, { useEffect, useState } from 'react';
import { useForm } from './useForm';
import { Hello } from './Hello';
import { useFetch } from './useFetch';


function expensiveInitialState() {
	return 10;
}

const App = () => {
	// const [{count,count2},setCount] =  useState({count:10,count2:20});
	const [ values, handleChange ] = useForm({ email: '',name:'', password: '' });
	const [ values2, handleChange2 ] = useForm({ firstName: '', lastName: '' });
    
    const [showHello,setShowHello] = useState(true);
    const [count,setCount] = useState(()=> JSON.parse(localStorage.getItem("count")) );
    const {data,loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
    
    useEffect(()=> {
        localStorage.setItem('count',JSON.stringify(count))
    },[count])

	return (
		<div>
            <div> {!data? "loading...": data}</div>
            <div> Count ({count})</div>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            {/* <button onClick={()=>setShowHello(!showHello)}> toggle</button>
            {showHello && <Hello />} */}
			<input name="email" placeholder="email" value={values.email} onChange={handleChange} />
            <input name="name" placeholder="name" value={values.name} onChange={handleChange} />

			<input name="password" placeholder="password" type="password" value={values.password} onChange={handleChange} />
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
