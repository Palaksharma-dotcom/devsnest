import React, {useState} from "react";
import "./App.css";


function App(props) {
    const [count, setCount] = useState(0);
    return (
        <div className="app">
            <button
            onClick={()=>{
                const newCount = count+1;
                setCount(newCount);
                console.log(count);
            }}>{count}</button>
        </div>
    );
}

export default App;