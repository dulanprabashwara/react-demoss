import React from 'react'

const UserList = () => {
    const users =[
        {id : 1,name : "alice", age : 25},
        {id : 2,name : "bob", age : 30},
        {id : 3,name : "charlie", age : 22}


    ]
  return (
    <div>
        {users.map(user =>{
            <div key={user.id}>
                <h1> {user.name}</h1>
                <h2>{user.age}
                </h2>
            </div>
        })}
    </div>
  )
}

export default userList