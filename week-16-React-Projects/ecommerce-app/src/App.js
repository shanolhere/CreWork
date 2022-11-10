import {useState, useEffect} from "react"
import {NavLink, Link, Routes, Route, useNavigate} from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Wishlist from "./components/Wishlist"
import Cart from "./components/Cart"
import ProductDetails from "./components/ProductDetails"
import Login from "./components/Login";
import Signup from "./components/Signup";
import AppHome from "./components/AppHome";

import {DataContextProvider} from "./context/DataContext"
import { auth } from "./firebase";



function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setEmail(user.email);
      } else setUserName("");
    });
  }, []);

  useEffect(() => {
    if (userName) {
      navigate("/products");
    } else {
      navigate("/");
    }
  }, [userName]);


  return (
    <div className="">
      <DataContextProvider>
        <Navbar userName={userName}/>
        <Routes>
          <Route path="/" element={<AppHome/>}/>
          <Route path="/products" element={<Home/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/cart" element={<Cart/>}/> 
          <Route path="/product/:ID" element={<ProductDetails />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </DataContextProvider>
    </div>
    
  );
}

export default App;
