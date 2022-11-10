import React, {useContext} from "react";
import { DataContext } from "../context/DataContext";
import { useParams, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdStarRate } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";

const ProductDetails = ({}) => {
  const { ID } = useParams();
  

  const {products,setProducts,wishlist,setWishlist,cart,setCart, addToWishList, removeFromWishList, addToCart, removeFromCart} = useContext(DataContext);



  const selectedProduct = products.filter((product) =>{
        if(product.id===Number(ID)){
           return product
        }
  })

  

  return (
    <div className="container mx-auto py-4 my-2">
      <Link to="/">
        <button className="backBtn bg-sky-500 p-2 rounded-md mx-2 flex flex-row justify-center items-center gap-2">‹ Back to Products</button>
      </Link>
      <div className="card1 flex flex-col justify-center items-center py-2 mx-2">
        <div className="imageContainer">
          <img src={selectedProduct[0].image} className="image" alt="product" />
        </div>
        <div className="details flex flex-col justify-center items-center py-2 mx-2 gap-2">
          <div className="title text-2xl font-semibold">
            <h2>
              {selectedProduct[0].title} <span style={{backgroundColor: "orangered"}} className="rounded-md text-white text-sm text-center p-1">{selectedProduct[0].category}</span>
            </h2>
          </div>
          <p  className="title text-lg">{selectedProduct[0].description}</p>
          <div className="priceContainer flex flex-row justify-around items-center text-center gap-5 py-2">
            <p className="price text-3xl font-extrabold">$ {selectedProduct[0].price}</p>
            <div className="rating flex flex-row gap-2">
              <p>{selectedProduct[0].rating.rate}</p>
              <span>
                <MdStarRate style={{ color: "#fac905" }} size={22}></MdStarRate>
              </span>
            </div>
            <div className="count flex flex-row gap-2">
              <p>{selectedProduct[0].rating.count}</p>
              <span>
                <BsFillPeopleFill size={22}></BsFillPeopleFill>
              </span>
            </div>
          </div>
          <div className="btnContainer flex flex-row justify-around items-center text-center gap-2 py-2">
            <button className="addCart flex flex-row justify-around items-center gap-2 " onClick={() => addToCart(selectedProduct)}>
              Add to Cart <FaShoppingCart size={18}></FaShoppingCart>
            </button>
            <button
              className="addWishlist flex flex-row justify-around items-center gap-2 "
              onClick={() => addToWishList(selectedProduct)}
            >
              Add to Wishlist <BsFillHeartFill size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
