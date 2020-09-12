import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route ,Link, Switch} from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute'
import BubblePage from "./components/BubblePage";

import "./styles.scss";
import {Axios} from "./components/AxiosCall";

function App() {
  const [colors,setColors]=useState([])

  useEffect(()=>{
    const getColors=()=>{
      Axios()
      .get("/colors")
      .then((res)=>setColors(res.data))
      .catch((err)=>console.log(err))
    }
    getColors();
  },[])
  return (
    <Router>
        <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/protected">Protected</Link>
        </li></ul>
<hr/>

      <div className="App">
        {/* <h1>Renders our Main Page</h1> */}
        <Switch>
        <Route  path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
<PrivateRoute exact path="/protected" component={BubblePage} />


</Switch>
      </div>
    </Router>
  );
}

export default App;
