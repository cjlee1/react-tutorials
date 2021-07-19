import React, { useState,useCallback, useEffect, useMemo} from 'react';
// import { Hello } from './Hello';
// import { Square } from './Square';
import {useFetch} from './useFetch';



const App = () => {
	const [count,setCount] = useState(0);
	const favoriteNums = [7,21,37];
	//prevent function from changing the value, like when using react.memo or useeffect
	// const increment = useCallback((n)=>{
	// 	setCount(c=>c +n);
	// },[setCount]);

	const {data} = useFetch('https://raw.githubusercontent.com/ajzbc/kanye.rest/master/quotes.json')

	const computeLongestWord = useCallback(arr=>{

		if(!arr){
			return [];
		}
		console.log("computing longest word")
		let longestWord = '';
		JSON.parse(arr).forEach(sentence => sentence.split(" ").forEach(word =>{
			if(word.length > longestWord.length){
				longestWord=word;
			}
		})
		);
		return longestWord;
	},[]);

	const longestWord = useMemo(()=> computeLongestWord(data),[data]);
	return (
		<div>
		
			 {/* <Hello increment ={increment} /> */}
			 <div> count : {count}</div>
			{/* {favoriteNums.map(n=>{
				return (
					// <Square increment ={increment}  n={n} key ={n}/>

				);
			})} */}
			<button onClick={()=> setCount(count + 1)} > + </button>
			<div>
				{longestWord}
			</div>
		</div>
	);
};
export default App;
