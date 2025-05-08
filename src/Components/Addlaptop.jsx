import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addlaptop = () => {
  const[product_name,setProductName] = useState('')
  const[product_description,setProductDescription]=useState('')
  const[product_cost,setProductCost]= useState('')
  const[product_photo,setProductPhoto]= useState('')

  const[loading,setLoading] = useState()
  const[success,setSuccess] = useState()
  const[error,setError] = useState()

  const navigate = useNavigate();

  const handleSubmit= async (e)=>{
    e.preventDefault();
    setLoading('loading...')

    try {
      const formData= new FormData();
      formData.append('product_name',product_name)
      formData.append('product_description',product_description)
      formData.append('product_cost',product_cost)
      formData.append('product_photo',product_photo)
      const response = await axios.post('https://40b.pythonanywhere.com/api/add_laptop',formData)
      setLoading('')
      setSuccess(response.data.message)
      setError('')
      setProductName('')
      setProductPhoto('')
      setProductCost('')
      setProductDescription('')
      navigate('/')
      

      
    } catch (error) {
      setLoading('')
      setSuccess('')
      setError(error.message)
      
    }
  }

  return (
    <div className="row justify-content-center pt-5">
      <div className="card shadow col-md-6">
        <h1>Add Laptops</h1>
        {loading}
        {success}
        {error}
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Laptop"
            value={product_name}
            onChange={(e)=>{setProductName(e.target.value)}}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Description"
            value={product_description}
            onChange={(e)=>setProductDescription(e.target.value)}
          />
          <input
            type="number"
            className="form-control"
            placeholder="Enter Cost "
            value={product_cost}
            onChange={(e)=>setProductCost(e.target.value)}
          />
          <input
            type="file"
            className="form-control"
            placeholder="Choose file"
            onChange={(e)=>{setProductPhoto(e.target.files[0])}}
          />
          <br />
          <button className='btn btn-primary'>Add Laptop</button>
        </form>
      </div>
    </div>
  );
}

export default Addlaptop