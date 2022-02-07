import { useContext } from 'react';
import {CartContext} from "../context/CartContext"

const CartPage = () => {
  const {products, loading} = useContext(CartContext)
  return <div>
    {loading ? <p>cargando</p> : <h1>{products.name}</h1>}
  
  </div>;
};
export default CartPage