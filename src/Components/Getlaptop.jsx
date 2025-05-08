import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import axios from "axios";

import { useNavigate } from "react-router-dom";







const Getlaptop = () => {
  const [products, setProducts] = useState([]);
  const img_url = "https://40b.pythonanywhere.com/static/images/";
  const[searchTerm,setSearchTerm] = useState('');

  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const getProducts = async () => {
    setLoading("Loading...");
    try {
      const response = await axios.get(
        "https://40b.pythonanywhere.com/api/get_products_details"
      );
      setLoading("");
      setProducts(response.data.products);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((product)=>product.product_name.toLowerCase().includes(searchTerm.toLowerCase()));

  



  return (
    <div className="container-fluid row">
      <h1>Explore Products</h1>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Laptop"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Carousel Section with Custom Arrows */}
      

      {loading}
      {error}

      {filteredProducts.map((products, index) => (
        <div className="col-md-3 mb-4" key={index}>
          <div className="card shadow p-2">
            <img
              src={img_url + products.product_photo}
              className="mt-4 eco"
              alt={products.product_photo}
            />

            <div className="card-body">
              <h5 className="mt-2">{products.product_name}</h5>
              <p className="text-muted">{products.product_description}</p>
              <b>
                <p className="text-warning">{products.product_cost}</p>
              </b>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate("/payment", { state: { products } });
                }}
              >
                Show details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Getlaptop;
