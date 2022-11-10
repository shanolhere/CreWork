import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdStarRate } from "react-icons/md";
import { IoStar } from "react-icons/io";
import { DataContext } from "../context/DataContext";
import { BsFillHeartFill } from "react-icons/bs";
import EmptyWishlist from "./EmptyWishlist";

const Wishlist = () => {
    const {products,setProducts,wishlist,setWishlist,cart,setCart, addToWishList, removeFromWishList, addToCart, removeFromCart} = useContext(DataContext);

 

  return (
    <div className="wishlistContainer container mx-auto py-4 my-2">
      <div style={{ textAlign: "center", margin: "0.5rem auto 1.5rem auto",letterSpacing:"1px" }} className="text-xl italic font-extrabold text-gray-300">
        <q>where your finger doesnt have limits to choose</q>
      </div>
      <h5 className="text-center py-2 text-xl font-bold">
        <span style={{color: "rgb(240, 41, 74)"}}>{wishlist.length}</span> items in your Wishlist!
      </h5>
      <div className="wishlistProducts container mx-auto py-6 my-8 flex flex-wrap justify-center align-baseline gap-5">
        {wishlist.length === 0 ? <EmptyWishlist /> : (
            wishlist.map((product)=> {
                const titleString =
                            product.title.length > 30
                                ? product.title.slice(0, 28) + "..."
                                : product.title;
                return (
                    <div className="product__card rounded-md py-2 my-2" key={product.id}>
                        <img src={product.image} alt={product.title} className="product__image "/>
                        <p className="text-lg font-normal py-1 text-center">{titleString}</p>
                        <div className="flex flex-row justify-around items-center text-center gap-2 py-2">
                            <p className="text-3xl font-semibold py-1 text-center">$ {product.price}</p>
                            <div className="flex flex-row gap-2">
                                <p>{product.rating.rate}</p>
                                <span>
                                    <MdStarRate style={{ color: "#fac905" }} size={22}></MdStarRate>
                                </span>
                            </div>
                            <div className="flex flex-row gap-2">
                                <p>{product.rating.count}</p>
                                <span>
                                    <BsFillPeopleFill size={22}></BsFillPeopleFill>
                                </span>
                            </div>
                       </div>
                       <div className="btnContainer flex flex-row justify-around items-center text-center gap-2 py-0">
                            <button className="addCart flex flex-row justify-between items-center gap-2 text-sm" onClick={() => addToCart(product)}>
                            Add to Cart <FaShoppingCart size={18}></FaShoppingCart>
                            </button>
                            <button
                            className="addWishlist flex flex-row justify-between items-center gap-2 text-sm"
                            onClick={() => removeFromWishList(product)}
                            >
                            Remove from Wishlist <BsFillHeartFill size={18} />
                            </button>
                        </div>
                    </div>
                )
            })
        )}
      </div>
    </div>
  );
};

export default Wishlist;