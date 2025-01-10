import React from 'react'
const validpassword =()=> <h1> valid password</h1>
function invalidpassword() {
    return <h1> invalid password</h1>
}

const password = ({isvalid}) => {

  return (
    <div>
         return isvalid ? <validpassword/> : <invalidpassword/>
    </div>
  )
}

export default Password