import React, {useContext} from "react";
import {NavLink, useNavigate} from "react-router-dom"
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { BsFillHeartFill , BsFillMoonFill} from "react-icons/bs";
import {GrLogout} from "react-icons/gr"
import {HiSun} from "react-icons/hi"

import { DataContext } from "../context/DataContext";


import { signOut } from "firebase/auth";
import { auth } from "../firebase";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({userName}) => {
    const {products,setProducts,wishlist,setWishlist,cart,setCart, addToWishList, removeFromWishList, addToCart, removeFromCart, theme, setTheme, toggleTheme} = useContext(DataContext);

    //console.log(userName);

    const navigate = useNavigate();

    const logOutHandler = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            //console.log("successful")
            toast.success(`Logged out successfully!`, {
              position: toast.POSITION.TOP_RIGHT,
              className: "toast-moveTask"
            });
          })
          .catch((error) => {
            alert(error);
          });
        navigate("/");
    };



 return (
    <nav className="bg-sky-500 py-2 flex flex-wrap justify-between items-center">
        <NavLink to="/" >
            <h1 className="text-xl p-1 text-white font-extrabold md:text-3xl px-4 ">FakeStore</h1>
        </NavLink>
        {/* slider, cart, whislist icons profile*/}
        
        <div className="links flex gap-4 mx-1 py-1 justify-center items-center lg:mx-1">
          
            {theme==="dark" && <HiSun color="white" size={24} onClick={toggleTheme} className="sunIcon hover:cursor-pointer"/> }
            
            {theme==="light" && <BsFillMoonFill color="black" size={22}  onClick={toggleTheme} className="moonIcon hover:cursor-pointer"/> }
           
          {userName && ( <NavLink to="wishlist">
            <BsFillHeartFill size={28} className="wishlistIcon" />
            <p className="badge2">{wishlist.length}</p>
          </NavLink> ) }

          {!userName && (<NavLink to="login"><h2 className="text-lg font-bold">LogIn</h2></NavLink> )}

          {userName && ( <NavLink to="cart">
            <FaShoppingCart size={28} className="cartIcon" />
              <p className="badge1">{cart.length}</p>
            </NavLink> )}
          
            {userName && ( <NavLink to="account">
              <FaUserAlt size={25} className="profileIcon" />
              
            </NavLink> )}

          {!userName &&  (<NavLink to="signup"><h2 className="text-lg font-bold">SignUp</h2></NavLink> )}

          {userName && ( <button onClick={logOutHandler}>
              <GrLogout size={28} color="white" className="logoutIcon" />
            </button> )}


        </div>
    
        
    </nav>
 )
}
export default Navbar;