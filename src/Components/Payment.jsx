import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import axios from 'axios';

const Payment = () => {
  // this component imported data from get product button
const{products}=useLocation().state||{};
const[phone,setPhone]= useState();

// feedback system
const[success,setSuccess] = useState()
const[loading,setLoading] = useState()
const[error,setError] = useState()

const img_url ="https://40b.pythonanywhere.com/static/images/"

const handleSubmit=async (e)=>{
  setLoading('loading...')
  e.preventDefault();
  try {
    const formData = new FormData();
    formData.append('amount',products.product_cost)
    formData.append('phone',phone)

    const response = await axios.post('https://modcom2.pythonanywhere.com/api/mpesa_payment',formData)
    setLoading('')
  } catch (error) {
    setError(error.message)
    
  }
}

  return (
    <div className="row justify-content-center mt-5">
      <h1 className="m-2">Mpesa Payment-LIPA NA M-PESA</h1>
      <div className="card shadow col-md-6 p-2">
        <h1 className="text-success">LIPA NA M-PESA</h1>
        {loading}
        {success}
        {error}
        <img
          src={img_url + products.product_photo}
          className='mt-4'
          alt={products.product_photo}
        />
        <h3 className="text-secondary">{products.product_name}</h3>
        <p className="text-danger">{products.product_cost}</p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="tel"
            className="form-control"
            placeholder="Enter 254*****"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}
          />
          <br /> <br />
          <button type='submit' className="btn btn-primary">Purchase Now</button>
        </form>
      </div>
    </div>
  );
}

export default Payment