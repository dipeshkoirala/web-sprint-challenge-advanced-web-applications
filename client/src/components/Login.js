import React ,{Component} from "react";
import {useHistory} from 'react-router-dom'

import {Axios} from "./AxiosCall";

export class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  

  handleChange=(e)=>{
    this.setState({
      credentials:{
        ...this.state.credentials,[e.target.name]:e.target.value,

      }
    })
  }
  logIn=(e)=>{
    e.preventDefault();
    Axios()
      .post("/login", this.state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        // console.log(res.data); 
        this.props.history.push('/protected')
      })
      .catch((err) => console.log({ err }));

  }
  render(){
  return (
    <div className="login bg-success">
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    
      
        <form onSubmit={this.logIn}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder="User Name"
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button className="log  bg-info p-2">Log in</button>
        </form>
    </div>

  );
  }
};

export default Login;
