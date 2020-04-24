import React, { useState } from "react";
import { axiosWithAuth } from '../utility/axiosWithAuth';

const Login = (props) => {
  const [userInput, setUserInput] = useState({ username: '', password: '' });

  const handleChange = e => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
    console.log(userInput);
  }
  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth().post('/api/login', userInput)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubble-page');
      })
      .catch(err => {
        console.log(err);
        alert('Incorrect Login');
      })

  }
  return (
    <div className='loginForm'>
      <form onSubmit={handleSubmit}>
        <h2>Color App</h2>
        <input type="text" name="username"
          value={userInput.username} onChange={handleChange} />
        <input type="password" name="password"
          value={userInput.password} onChange={handleChange} />
        <button>Login</button>
      </form>

    </div>
  );
};
export default Login;