import React, {useContext, useEffect} from "react";
import { DataContext } from "../context/DataContext";
import { Link} from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdStarRate } from "react-icons/md";
import { HiChevronRight } from "react-icons/hi";
import { BsFillHeartFill } from "react-icons/bs";

import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Home = () => {
    const {products,setProducts,wishlist,setWishlist,cart,setCart, addToWishList, removeFromWishList, addToCart, removeFromCart} = useContext(DataContext);

    const fetchData = async() => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        //console.log(data);
        setProducts(data)
    }
    useEffect(()=> {
        fetchData();
    },[])


 return (
    <div className="container mx-auto py-4 my-2">
        
    <Link to="/">
        <button className="backBtn browseBtn bg-sky-500 p-2 rounded-md mx-2 flex flex-row justify-center items-center gap-2">
          Browse Products <HiChevronRight />
        </button>
      </Link>
      <div style={{ textAlign: "center", margin: "1.5rem auto 1.5rem auto",letterSpacing:"1px" }} className="text-xl italic font-extrabold text-gray-300">
        <q>Browse and choose your happiness</q>
      </div>
      
    <div className="container mx-auto py-6 my-8 flex flex-wrap justify-center align-baseline gap-5">
    <ToastContainer/>
    
        {products.length===0 ? (<p>Loading...</p>) : (
            
            products.map((product)=> {
                const titleString =
                            product.title.length > 30
                                ? product.title.slice(0, 28) + "..."
                                : product.title;
                return (
                    <div className="product__card rounded-md py-2 my-2" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.title} className="product__image "/>
                        </Link>
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
                       <div className="btnContainer flex flex-row justify-around items-center text-center gap-2 py-2">
                            <button className="addCart flex flex-row justify-around items-center gap-2 " onClick={() => addToCart(product)}>
                            Add to Cart <FaShoppingCart size={18}></FaShoppingCart>
                            </button>
                            <button
                            className="addWishlist flex flex-row justify-around items-center gap-2"
                            onClick={() => addToWishList(product)}
                            >
                            Add to Wishlist <BsFillHeartFill size={18} />
                            </button>
                        </div>
                    </div>
                )
            })
        )}
        
    </div>
    </div>
 )
}
export default Home;