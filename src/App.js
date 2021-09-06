import React from 'react';
import Home from './features/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const NavBar = () => {
    return (
        <Router>
            <div className="container">
                <div className="row navbar text-decoration-none">
                    <div className="col-sm-2 col-6"><Link to="/">REDUX-STORE</Link></div>
                    <div className="offset-2 offset-sm-8 col-sm-1 col-2"><Link to="/"><i style={{ fontSize: "1.5rem" }} className="bi bi-heart-fill"></i></Link></div>
                    <div className="col-sm-1 col-2"><Link to="/"><i style={{ fontSize: "1.5rem" }} className="bi bi-cart-fill"></i></Link></div>
                </div>
            </div>

            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}

function App() {
    return <NavBar />
}

export default App;
