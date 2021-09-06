
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
// import ThemeToggle from './ThemeToggle';
import './App.css';
import TodoList from './TodoList'
// import ThemeContext from './ThemeContext'

interface TodoType {
  title:string;
}

const App =() =>{
  const [value ,setValue] = useState<string>("");
  const [todos ,setTodos] = useState<TodoType[]>([])
 console.log(todos)
  return (
    <div className ="divm">
         <div className="main">ggggg
                <input className ="input" type = "text" onChange = {(e)=> {setValue(e.target.value);} } value = {value}  />
                <button  className = "Add"  onClick = {() => {setTodos( [...todos,{title:value}]); setValue("")}}  >ADD</button>
                 {todos.map((todo,index) =>(
         <TodoList  title ={todo.title} />
       ))}
       
     </div>
     <div className  ="main2">jgghhy</div>
     </div>
    
     
   
  );
}

export default App;