import React, { useEffect, useState } from 'react'

const useeffect = () => {
    const[value,setValue]=useState(0);
    useEffect(()=>{
        console.log("incremented");
       
;    },[value]);

  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>setValue((v)=> v+1)}>increment</button>
    </div>
  )
}

export default useeffect