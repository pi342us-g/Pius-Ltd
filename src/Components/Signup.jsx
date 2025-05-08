

import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const[username,setUsername] = useState('')
  const[email,setEmail] = useState('')
  const[phone,setPhone] = useState('')
  const[password,setPassword] = useState('')

  const[loading,setLoading]= useState('')
  const[success,setSuccess] = useState('')
  const[error,setError] = useState('')

  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoading('loading...')
    try {
      const formData= new FormData();
      formData.append('username',username)
      formData.append('email',email)
      formData.append('phone',phone)
      formData.append('password',password)

      const response = await axios.post('https:40b.pythonanywhere.com/api/signup',formData)
      setLoading('')
      setSuccess(response.data.success)
      setError('')
      navigate('/signin')


      

    } catch (error) {
      setError(error.message)
      
    }
  }

  return (
    <div className="row justify-content-center mt-2">
      <div className="shadow card col-md-6 p-3">
        <h1>Sign Up</h1>
        {loading}
        {success}
        {error}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            value={username}
            onChange={(e)=>{setUsername(e.target.value)}}
          />
          <br />
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br />
          <input type="tel" className="form-control"
           placeholder="2547*****" 
           value={phone}
          onChange={(e)=>{setPhone(e.target.value)}}/>
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          /> <br />
          <p>Already have an account🤷‍♂️🤷‍♂️? <Link to='/signin'>Sign In</Link></p>
          <button type='submit' className="btn btn-primary form-control">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
