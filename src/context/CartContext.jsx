import { createContext, useContext, useState } from "react";



export const CartContext = createContext({});
CartContext.displayName = "CartContext"


export const CartProvider = ({children}) => {
   const [cart, setCart] = useState([])

   const addItem = ( item, quantity) => {
     const newItem = {item, quantity} 
   console.log("Agregaste: ", newItem);
    setCart((prevState) => [...prevState, newItem]) 
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((element) => element.item.id !== id));
  };

  const deleteAll = () => {
    setCart([])
  }
  return(
<CartContext.Provider value={{cart, addItem, removeItem, deleteAll}} >{children}</CartContext.Provider>
  )
};

export const useCart = () => useContext(CartContext)