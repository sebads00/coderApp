import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate()
  const {cart, removeItem, deleteAll} = useCart()
  return (
    <>
    <h1>Cart</h1>
    {cart.map((purchase) => {
      return (
        <div key={purchase.item}>
          <div className="NameContainer">
          <p>{purchase.item.name}</p>
          <p>{purchase.quantity}</p>
          </div>
          <div className="RemoveContainer">
          <img src={purchase.item.img} alt="" />
          <button onClick={()=> removeItem(purchase.item.id)}>
            Eliminar
          </button>
          </div>
        </div>
      );
    } )}
    <div className="CartbtnContainer">
    <button onClick={deleteAll}>Eliminar todo</button>
    <button onClick={() => navigate(`/products`)}>Seguir comprando</button>
    </div>
    </>
  )

};
export default CartPage