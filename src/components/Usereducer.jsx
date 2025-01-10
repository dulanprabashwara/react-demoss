import React from 'react'
import { useReducer,useState } from 'react'

const initialstate= {count : 0}
const reducer=(state,action)=>{
    switch(action.type){
        case "increment":
            return {...count,count: state.count + 1};
        case "decrement" : 
            return {...count,count: state.count - 1};
        case "reset":
            return {...count,count : 0};
        default: 
            return state;
    }
}
export const Usereducer = () => {
    const[state,dispatch] = useReducer(reducer,initialstate);
  return (
    <div>
        <button onClick={()=> dispatch("increment")}>+</button>
        <button onClick={()=> dispatch("decrement")}>-</button>
        <button onClick={()=> dispatch("reseet")}>reset</button>

        <h1> count : {state.count}</h1>
    </div>
  )
}
