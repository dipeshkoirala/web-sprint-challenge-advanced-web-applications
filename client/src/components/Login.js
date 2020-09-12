import React ,{useState} from "react";
import {useHistory} from 'react-router-dom'

import {Axios} from "./AxiosCall";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [state,setState]=useState({
    credentials:{username:"",password:""}
  })
  const {push}=useHistory();

  const handleChange=(e)=>{
    setState({
      credentials:{
        ...state.credentials,[e.target.name]:e.target.value,

      }
    })
  }
  const logIn=(e)=>{
    e.preventDefault();
    Axios()
      .post("/login", state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        console.log(res.data); 
       push('/protected')
      })
      .catch((err) => console.log({ err }));

  }
  return (
    <div className="login bg-success">
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    
      
        <form onSubmit={logIn}>
          <input
            type="text"
            name="username"
            value={state.credentials.username}
            onChange={handleChange}
            placeholder="User Name"
          />
          <input
            type="password"
            name="password"
            value={state.credentials.password}
            onChange={handleChange}
            placeholder="password"
          />
          <button className="log  bg-info p-2">Log in</button>
        </form>
    </div>

  );
};

export default Login;
