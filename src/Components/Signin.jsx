import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () =>{
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
      
    const[success,setSuccess] = useState('')
    const[loading,setLoading] = useState('')
    const[error,setError] = useState('')

    const navigate = useNavigate();

    const handleSubmit =async (e)=>{

        try { 
          const formData = new FormData('')
          formData.append('email',email)
          formData.append('password',password)
          const response = await axios.post('https://40b.pythonanywhere.com/api/Signin',formData)
          setLoading('')
          if(response.data.user){
            setSuccess(response.data.message)
            setError('')
            navigate('/getlaptop')
          }else{setSuccess(response.data.message);}
            
        } catch (error) {
          setError(error.message)
            
        }

    }

  return (
    <div className="row justify-content-center mt-3 ">
      <div className="card shadow col-md-6 p-2">
        <h1 >Sign In</h1>
        {loading}
        {success}
        {error}
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          /> <br />
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          /> <br />
          <button className='btn btn-primary'>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Signin