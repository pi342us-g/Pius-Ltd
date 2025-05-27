import logo from './logo.svg';
import './App.css';
import Signup from "./Components/Signup";
import { BrowserRouter, Routes, Link,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Signin from './Components/Signin';
import Addlaptop from './Components/Addlaptop';
import Getlaptop from './Components/Getlaptop';
import Payment from "./Components/Payment";
import NotFound from './Components/NotFound';
import Carousel from './Components/Carousel';
import Chatbot from "./Components/Chatbot";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>DevMint Solutions</h1>
        </header>
        <nav>
          <Link className="link" to="/signup">
            Sign Up
          </Link>
          <Link className="link" to="/signin">
            Sign In
          </Link>
          <Link className="link" to="/addlaptop">
            Add Laptop
          </Link>
          <Link className="link" to="/getlaptop">
            Get Laptop
          </Link>
          
        </nav>
        

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/addlaptop" element={<Addlaptop />} />
          <Route path="/getlaptop" element={<Getlaptop />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/" element={<Getlaptop />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Chatbot />

      <footer>
        <div className="row">
          <div className="col-md-4 contact">
            <h2 className="text-light">Contact Us</h2>
            <p>
              <b>Phone: 0792342944</b>
            </p>
            <p>
              <b>Whatsapp: 0792342944</b>
            </p>
            <p>
              <b>Email : ndubipius96@gmail.com</b>
            </p>
            <br />
            <h1 className="text-light">Working Hours</h1>
            Monday to Friday : 8am -7.30pm <br />
            Saturday : 9am -6pm <br />
            Sundays : CLOSED
          </div>
          <div className="col-md-4">
            <h2 className="text-light">Stay Connected</h2>
            <form action="">
              <br />
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
              />{" "}
              <br />
              <textarea
                name=""
                className="form-control"
                placeholder="Leave a Message"
                id=""
              ></textarea>
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="bg-dark text-light text-center">
          <p className="copy">
            &copy;Pius Programmer 2025, All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
export default App;
