import { useEffect, useRef, useState } from "react"

export const useFetch = (url) =>{
    const isCurrent = useRef(true);
    const [state,setState] = useState({data:null,loading:true});
useEffect(()=>{
    return()=>{
      //called when a component is unmounted
      isCurrent.current = false  
    }
},[])

    useEffect(()=>{
        setState(state=>({data:state.data,loading:true}))
        fetch(url)
        .then(
            x=> x.text()
        ).then(
            y=>{
                console.log(y);
                setTimeout(()=>{
                    if (isCurrent.current){
                        setState({data:y,loading:false});
                        
                    }
                },2000);
            });

    },[url]);
    return state;
}