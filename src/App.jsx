import { Card } from "react-bootstrap";                           
import "./index.css";
import Contextapi from "./components/Contentapi";
import User from "./User";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import JSXRules from "./components/JSXRules";
import Main from "./components/Main";
import Productinfo from "./components/Productinfo";
import WelcomeMessage from "./components/WelcomeMessage";
import userList from "./components/userList";
import Password from "./components/password";
import { useEffect, useState } from "react";
import { createContext} from "react";
import Usefetch from "./components/Usefetch";


const validpassword = ()=> <h1> valid password</h1>
const invalidpassword =()=> <h2> invalid password</h2>

const specialclass = 'simple-class'
const multiply = (a,b)=> a+b;
const myName = " dulan";
const numbers = [1,2,3,4,5,6];
const userinfo = [
  { username : " SRI ",
    email : "sfDFsf@gmail.com",
    location : "UK",
  },{
    username : " DEWMNI ",
    email : "sSDSDfsf@gmail.com",
    location : "CANADA",
  },{
    username : " imashika ",
    email : "sfssdvsdvf@gmail.com",
    location : "usa",
  }
]


const Cart=()=>{
  const items = ["powerbank","ssd","headphones"];
  return (
    <div>
      <h1>cart</h1>
      <ul>
        <h4> products</h4>
        {items.map((item)=>(
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export const data = createContext() 
export const data1 = createContext() 



const App= ()=>{
  const styles = {color : "red",backgroundColor: " teal", padding : "2rem"  };
  const [count,setCount]= useState(2);
  const [friends,setFriends]= useState(["dulan","sri","prabashwara"]);
  const [movie,setMovie]= useState({name : "eqalizer", ratings : 5})
  const [name, setName]=useState("dulan");
  function handleclick(){
    const copymovie ={...movie,ratings: 5};
    setMovie(copymovie);

    const handlechange=(event)=>{
      setName(event.target.value);
    }
    useEffect(()=>{
      localStorage.setItem('name',JSON.stringify(name))
    },[name]);

    const[todos,setTodos]= useState([]);
    const [inputvalue,setInputvalue]=useState("");

    const handlesubmit=(e)=>{
        e.preventDefault();
        if(inputvalue.trim()){
          setTodos([...todos,inputvalue])
          setInputvalue("");
        }
    }
  }
  const myname = "dulan";
  const myage = 21;

  const [data] = Usefetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      {/* <Card>
        <h1> header</h1>
        <p> content</p>
      </Card> */}
      <Password isvalid={true}/>
      <h1 style={styles}> cart</h1> double curly braces
      {items.length >0 && <h2>you have {items.length} items in your cart</h2>}
        <button onClick={()=> console.log(Math.round(Math.random()*10))}> click me</button>
        <p onCopy={()=> console.log("stop copying mee")} onMouseMove={()=> console.log("when move the mouse")}> hi copy me to see</p>

        <h1> {count}</h1>
        <button onClick={()=> setCount(count +1)}> add</button>
        <button onClick={()=> setCount(count - 1)}>decrese</button>
        
        <button onClick={()=>setFriends([...friends,"imashika"])}>ADD friend</button>
        <button onClick={()=>setFriends(friends.filter((f)=>f!== 'sri'))}>remove friend</button>
        <button onClick={()=>setFriends(friends.map( (f)=> 'smith'? "sam smith": f))} >update friend</button>

        <h1> movie : {movie.name}</h1>
        <h3> ratings : {movie.ratings}</h3>
        <button onClick={handleclick}> change ratings</button>

        <input type="text" value={name} onChange={handlechanger} placeholder="enter your name"/>
        <button onClick={handleclear} >clear name</button>

        <h1> todo list</h1>
        <form onSubmit={handlesubmit} >
          <input type="text" value={inputvalue} placeholder="add a new todo" onChange={(e)=>{setInputvalue(e.target.value)}}/>
         <button type="submit">add todo </button>
        </form>


        <ul>
          {todos.map((todo,index)=>(
            <li key={index}>{todo}</li>
          ))}
        </ul>

          <div>
            <data.provider value={name}>
              <data1.provider value={myage}>
              <Contentapi/>
              </data1.provider>
            </data.provider>
          </div>

          <div>
            {data && data.map((item)=>{
              return <p key={item.id} >{item.title}</p>;
            })}
          </div>



    </div>
  
  )
};
export default App;