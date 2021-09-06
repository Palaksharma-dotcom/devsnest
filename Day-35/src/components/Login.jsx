import { useState } from 'react/cjs/react.development';
import Main from './Main'
function Login(){
    const [ismainn ,setmain]= useState(0)
    console.log(ismainn == "0");
   return (
       <div>
        {ismainn == "0" ? (
        <div className ="main">
         <div className="Login1">
        <h2 className = "Ig">Instagram</h2>
        <input type="text" value ="Username" className="Username" />
        <input type="password" value = "Password" className="Password" />
        <button className ="Login" onClick ={( )=>setmain(1)}>Login/Sign Up</button>
        </div>
        <div className="Login2"></div>
    </div>
        ) : (
            <Main />
         )
  
        }
</div>
);
}
    
  
export default Login;