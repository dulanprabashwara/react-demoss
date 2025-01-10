import React from 'react'
import { useId } from 'react'

const useid = () => {
    const id = useId();
  return (
    <div>
        <label htmlFor={`${id}-email`}>Email : </label>
        <input type='email' id={`${id}-email`}/><br></br>
        <label htmlFor={`${id}-password`}>PAssword : </label>
        <input type='password' id={`${id}-password`}/>
    </div>
  )
}

export default useid