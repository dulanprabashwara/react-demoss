import React from "react";
const greet = "hello"
const date = new Date();
function Greet(){
    return (
        <div>
            <h1> {greet}</h1>
            <p> Date : {date.getDate()}</p>
        </div>
    )
}
export default Greet;