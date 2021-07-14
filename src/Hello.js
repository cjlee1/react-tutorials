import React from 'react';

export const Hello=()=>{
    React.useEffect(()=>{
        console.log("remder")
        return ()=> {
            console.log("unmount")
        }
    },
    [] //caalled the dependency array, pass in all the values the effect depends on. the effect will occur when those vaalues change
    );
    return <div> Hello</div>
}