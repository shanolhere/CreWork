import {createContext, useState, useEffect} from "react";


const DataContext = createContext();

export const DataContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [cart, setCart] = useState([]);

    const [theme, setTheme] = useState(
      localStorage.getItem('theme') || 'light'
    );

    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
    useEffect(() => {
      localStorage.setItem('theme', theme);
      document.body.className = theme;
    }, [theme]);

    function addToWishList(product) {
        
        // toast.success("Item added to Wishlist !", {
        //   position: toast.POSITION.TOP_RIGHT,
        //   className: "toast-addWishlist"
        // });
        if (!wishlist.length) {
            setWishlist((prevProducts) => {
            return [...prevProducts, product];
          });
        } else {
          let uniquelist = wishlist.filter((item) => item.id !== product.id);
          uniquelist = [...uniquelist, product];
          setWishlist(uniquelist);
        }
    }

    function removeFromWishList(product) {
        
        // toast.error("Item removed from Wishlist !", {
        //   position: toast.POSITION.TOP_RIGHT,
        //   className: "toast-removeWishlist"
        // });
        setWishlist((prevProducts) => {
          return prevProducts.filter((item) => {
            return item.id !== product.id;
          });
        });
      }

      function addToCart(product) {
        if (!cart.length) {
          product = { ...product, quantity: 1 };
          setCart((prevProducts) => {
            return [...prevProducts, product];
          });
        } else {
          let uniquelist = cart.filter((item) => item.id !== product.id);
          product = { ...product, quantity: 1 };
          uniquelist = [...uniquelist, product];
          
          setCart(uniquelist);
        }
        // toast.success("Item added to Cart !", {
        //   position: toast.POSITION.TOP_RIGHT,
        //   className: "toast-addCart"
        // });
      }
    
      function removeFromCart(product) {
        
        product = { ...product, quantity: product.quantity - 1 };
        
        setCart((prevProducts) => {
          return prevProducts.filter((item) => {
            return item.id !== product.id;
          });
        });
        // toast.error("Item removed from Cart !", {
        //   position: toast.POSITION.TOP_RIGHT,
        //   className: "toast-removeCart"
        // });
      }



    
    return (
        <DataContext.Provider value={{products,setProducts,wishlist,setWishlist,cart,setCart, addToWishList, removeFromWishList, addToCart, removeFromCart, theme, setTheme, toggleTheme}}>
            {children}
        </DataContext.Provider>
    )
}

export {DataContext}