import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
    const navigate = useNavigate()
    const {cart} = useCart()
   return (
    <>
        <AiOutlineShoppingCart onClick={() => navigate(`/Cart`) } /> 
        <p>{cart.length}</p>
    </>
    )
} 
export default CartWidget
