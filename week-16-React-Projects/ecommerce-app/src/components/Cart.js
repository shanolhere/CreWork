import React , {useContext} from "react";
import {Link} from "react-router-dom";
import EmptyCart from "./EmptyCart";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { DataContext } from "../context/DataContext";


const Cart = () => {

  const {products,setProducts,wishlist,setWishlist,cart,setCart, addToWishList, removeFromWishList, addToCart, removeFromCart} = useContext(DataContext);

  const incrQuantity = (id) => {
    let desiredItem = cart.filter((item) => item.id === id);

    desiredItem = { ...desiredItem[0], quantity: desiredItem[0].quantity + 1 };
    cart.map((product) => {
      if (product.id === desiredItem.id) {
        product.quantity = desiredItem.quantity;
      }
    });

    setCart((prevProducts) => {
      return [...prevProducts];
    });
  };


  const decrQuantity = (id) => {
    let desiredItem = cart.filter((item) => item.id === id);
    desiredItem =
      desiredItem[0].quantity > 0
        ? { ...desiredItem[0], quantity: desiredItem[0].quantity - 1 }
        : { ...desiredItem[0], quantity: 0 };

    cart.map((product) => {
      if (product.id === desiredItem.id) {
        product.quantity = desiredItem.quantity;
      }
    });
    
    const newcartData = cart.filter((item) => {
      return item.quantity !== 0;
    });
    
    setCart(newcartData);
  };



  const total = cart.reduce((acc, product) => {
    acc += Number(product.quantity) * Number(product.price);
    return acc;
  }, 0);


  const cartlistMap = cart.map((product) => {
    
    return (
      <div className="productCard flex flex-col justify-center items-center gap-5 m-2 p-2 lg:flex-row" key={product.id}>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} className="cartImage" alt="product" />
        </Link>
        <div className="productCard-details flex flex-col justify-center items-center gap-2 lg:justify-start">
          <div className="productCard-title flex flex-col justify-center items-center gap-2 lg:justify-start">
            <p className="title text-lg font-bold py-1 text-center lg:text-left">
              {product.title.length > 40
                ? product.title.slice(0, 35) + "..."
                : product.title}
            </p>
            <div className="price-container">
              <p className="price text-2xl font-semibold">$ {product.price}</p>
              <div className="inputContainer flex flex-row justify-between items-center gap:5">
                <button
                  className="incr"
                  onClick={() => incrQuantity(product.id)}
                >
                  +
                </button>
                <h4>{product.quantity}</h4>
                <button
                  className="decr"
                  onClick={() => decrQuantity(product.id, product.quantity)}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="btnContainer flex flex-row justify-around items-center text-center gap-2 py-2">
            <button className="addCart flex flex-row justify-between items-center gap-2 text-sm" onClick={() => removeFromCart(product)}>
              Remove from Cart <FaShoppingCart size={18}></FaShoppingCart>
            </button>
            <button
              className="addWishlist flex flex-row justify-between items-center gap-2 text-sm"
              onClick={() => addToWishList(product)}
            >
              Add to Wishlist <BsFillHeartFill size={18} />
            </button>
          </div>
        </div>
      </div>
    );
  });


  return (
    <div className="wishlistContainer cartContainer  container mx-auto py-4 my-2">
      
      <div style={{ textAlign: "center", margin: "0.5rem auto 1.5rem auto",letterSpacing:"1px" }} className="text-xl italic font-extrabold text-gray-300">
        <q>where your happiness rings your doorbell in form of our products</q>
      </div>
      <h5 className="text-center py-2 text-xl font-bold">
        <span style={{color: "green"}}>{cart.length}</span> items in your Cart!
      </h5>
      <div className="cartContainer container mx-auto py-6 my-8 flex flex-wrap justify-center align-baseline gap-5">
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          (
            <div className="productsCart flex flex-col gap-8 lg:flex-row lg:gap-15">
              <div className="cartListMap">{cartlistMap}</div>
              <div className="checkoutContainer ">
                <h4>Subtotal ({cart.length}) items</h4>
                <hr />
                <table>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((product) => {
                      return (
                        <tr key={product.id}>
                          <td>
                            {product.title.length > 30
                              ? product.title.slice(0, 28) + "..."
                              : product.title}
                          </td>
                          <td>{product.quantity}</td>
                          <td>$ {product.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <hr />
                <p className="total">
                  Total : $ <span>{total.toFixed(2)}</span>
                  /-
                </p>
                <button className="cartBtn">Proceed to CheckOut</button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Cart;
