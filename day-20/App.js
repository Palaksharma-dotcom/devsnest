// // import "./App.css";
// // const 
// // function App(){
// //   return <div className="App">hello wrld

// //   </div>;
// // }
// // export default App;
// import React, {createContext,useState} from "react"

// import picture from "./picture/picname.jpeg";

// export const App=createContext();
// const AppProvider=()=>{


// const [products]=useState([
//   {id:1,name:'dslr',price:300,image:dslr,status:'new'},
//   {id:2,name:'',price:300,image:dslr,status:'new'},
// ]);
// return (
//   <App.Provider value={{products: [...products]}}>

//   </App.Provider>
// )
// }
// export default AppProvider;
import React from "react";
import './App.css';
// import navbar  from "";
import productcontextProvider from "./productcontext.js";
import product from "./product.js";
function  App(){
  return(
    <div>
      {/* <Navbar /> */}
      <productcontextProvider>
        <Products></Products>
      </productcontextProvider>
    </div>
  );
}
export default App;