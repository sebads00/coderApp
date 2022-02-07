import { createContext, useEffect, useState } from "react";
import { getProducts } from "../product";
import { useParams } from "react-router-dom";


export const CartContext = createContext({});
CartContext.displayName = "CartContext"


export const CartProvider = ({children}) => {
    const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  
  
  useEffect(() => {
    setLoading(true)
    getProducts().then((data) => {
      const prodFilter = data.filter((product) => product.id === Number(id));
      setProducts(prodFilter[0]);
      })
      .finally(() => setLoading(false));
  }, []);
  return(
<CartContext.Provider value={{products, loading}} >{children}</CartContext.Provider>
  )
};
