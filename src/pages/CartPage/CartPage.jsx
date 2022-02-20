import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";



const CartPage = () => {
  const navigate = useNavigate()
  const {cart, removeItem, deleteAll} = useCart()
  /* const productIn = cart.find(

    (product) => product.item.id === item.id

  );

  if (productIn) {

    //se crea un nuevo carro filtrando por los productos que no estan repetidos

    const newCart = cart.filter(

      (product) => product.item.id !== item.id

    );

    //al producto que se esta queriendo ingresar y esta repetido se le suma la cantidad recibida

    productIn.quantity += quantity ;

    //se setea el cart,  con los productos de newCart que tenia los productos que no se iban a repetir(newcart), mas  el producto modificado. 

    setCart([...newCart, productIn]);

    } else setCart((prevState) => [...prevState, newItem]);
 */

    const totalPrice = () => {

      return cart.reduce((acc, prod) => acc + prod.item.price * prod.quantity, 0)
    
    }
    
    console.log(totalPrice())

console.log(cart);
  return (
    <>
    <h1>Cart</h1>
    
{cart.length === 0 ?
<p>no hay productos</p>
: 

    cart.map((purchase) => {
      return (
        <div className="" key={purchase.item}>
          <div className="NameContainer">
          <p>{purchase.item.name}</p>
          <p>{purchase.quantity}</p>
          <p>${purchase.item.price}</p>
          </div>
          <div className="RemoveContainer">
          <img src={purchase.item.img} alt="" />
          <button onClick={()=> removeItem(purchase.item.id)}>
            Eliminar
          </button>
          </div>
          <p>${totalPrice()}</p>
        </div>
      );
    } )
}
    <div className="CartbtnContainer">
    <button onClick={deleteAll}>Eliminar todo</button>
    <button onClick={() => navigate(`/products`)}>Seguir comprando</button>
    </div>
    </>
  )

};
export default CartPage

const addItem = (item, quantity) => {

  const newItem = { item, quantity };

  //chequea que el producto no este duplicado y si esta duplicado devuelve el producto 

  

};


