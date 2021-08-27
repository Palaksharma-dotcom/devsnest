import "./App.css";

import { inc,dec } from "./action/index";
import {useDispatch,useSelector} from "react-redux";
function App(){
  const count=useSelector((state)=>state.login);
  const dispatch=useDispatch();
  const mail =useSelector( (state) => state.mail);
  return (
  <div className="App">
    <h1>Data</h1>
    <input type="text" placeholder="Name" onChange= { (e) => {
             dispatch(Username(e.target.value));
       }} /><br />
   <input type="email" placeholder="Email" onChange= {
         (e) => {
          dispatch(Usermail(e.target.value));
         }
       }/>
       <h1>Details</h1>
       <h1>UserName:<span>{name} </span> </h1>
       <h1>Email:<span>{mail}</span> </h1>
     
    
  </div>
  );}


export default App;