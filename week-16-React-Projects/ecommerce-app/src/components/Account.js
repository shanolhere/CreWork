import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import Profile from "../assets/profile.jpg";

const Account = ({ userName, email }) => {
  // console.log(userName);
  const {products,setProducts,wishlist,setWishlist,cart,setCart, addToWishList, removeFromWishList, addToCart, removeFromCart} = useContext(DataContext);

  return (
    <div className="homeContainer flex flex-col justify-center items-center gap-2 mx-auto p-2 m-4">
        <img src={Profile} alt="profile" className="profile" />
        <h1 className="text-3xl font-extrabold">{userName}</h1>
        <h4 className="text-xl font-extrabold">{email}</h4>
        <table className="my-2 flex flex-col justify-center items-center p-2">        
          <tbody>
            <tr className="w-screen">
              <th>Products added to Cart</th>
              <td> : </td>
              <td>{cart.length}</td>
            </tr>
            <tr>
              <th>Products added to Wishlist</th>
              <td> : </td>
              <td>{wishlist.length}</td>
            </tr>
          </tbody>
        </table>
    
    </div>
  );
};
export default Account;