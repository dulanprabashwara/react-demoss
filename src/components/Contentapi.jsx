
import { data, data1 } from '../App'
import { useContext } from 'react'
import React from 'react'

const Contextapi = () => {
  const username= useContext(data);
  const userage = useContext(data1);
  return (
    <div>
      <h1> my name is {username} and i am {userage} years old </h1>
    </div>
  )
}
export {data,data1}; 
export default Contextapi