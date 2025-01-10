import React, { useEffect, useRef, useState } from 'react'
const timer = ()=>{
    const [count,setCount]=useState(0);
    const intervalref = useRef(null);
    useEffect(()=>{
        intervalref.current = setInterval(()=>{
            setCount(count+1);
        },1000)

        return()=>{
            clearInterval(intervalref.current);
        }
    },[])
    return(
        <div>
            <h1> timer : {count}</h1>
            <button onClick={()=>{clearInterval(intervalref.current)}}> stop timer</button>
        </div>
    )
}

function focusinput(){
    inputelement.current.focus();
    inputelement.current.write = "dulan";
}
 
const USeref = () => {
    const inputelement = useRef(null);
  return (
    <div >
        <input type='text' ref={inputelement}/>
        <button onClick={focusinput}>focus and write dulan</button>
        <timer/>
    </div>
  )
}

export default USeref