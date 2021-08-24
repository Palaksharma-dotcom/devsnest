import React, {useState} from "react";
import "./App.css";

function Card({title, calories, setGrocery, id, grocery}){
  const handleTodoDelete = () => {
    var list = grocery.filter((food, index)=> {
      return (index!==id)
    
    })
    setGrocery(list)
    console.log(list)
  }
  return (
    <div className="card">
      <h2>{title || "Title"}
      <button onClick={handleTodoDelete}>Delete</button>
      </h2>
      
      <p>you have consumed <span className="cal">{calories || "56"}</span> cals today</p>
    </div>
  )
}

function Todo({grocery, setGrocery}){
  return (
    <div className="todo">
      <h1>Calories Read only</h1>
      <div className="container">
        {grocery.map((food, index)=>{
          return <Card title={food[0]} calories={food[1]} key={index} setGrocery={setGrocery} id={index} grocery={grocery}/>
        })}
      </div>
    </div>
  )
}
const foodItem = [
  ["Pizza", 120],
  ["Burger", 500],
  ["Coke", 20],
  ["Pizza", 120],
  ["Pizza", 120],
  ["Burger", 500],
  ["Coke", 20],
  ["Burger", 500],
  ["Coke", 20],
  ["Pizza", 120],
  ["Burger", 500],
  ["Coke", 20]
]

function App(){
  const [grocery, setGrocery] = useState(foodItem) 
  return (
    <div>
      <Todo grocery={grocery} setGrocery={setGrocery}/>

    </div>
  )
}

export default App;