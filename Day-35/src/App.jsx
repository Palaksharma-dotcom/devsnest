import { render } from '@testing-library/react';
import './App.css';
import react from 'react';
import React from 'react';
import Login from './components/Login'
class App extends React.Component {
  constructor(props)
  {  super(props)
this.state = {isloading: 1}
}
componentDidMount() {
let a = setTimeout(()=>{this.setState({isloading :0});}, 1000);
  
}
render() {
  console.log(this.state.isloading)
return(
    <div className={this.state.isloading ==1?"load" : "App"}>
      {this.state.isloading ==0?<Login />:<div></div>}
  
    </div>
);
}
}

export default App;