import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getFirestore } from "../../firebase/index"


const CartPage = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [mail, setMail] = useState("")
  const {cart, removeItem, deleteAll} = useCart()
  const navigate = useNavigate()

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.item.price * prod.quantity, 0)
  }

  const handleSubmit = (evt) =>{
    evt.preventDefault()



    if(!name || !phone || !mail){
      console.log("llena los campos")
      return false
    }

    
    const newOrder = cart.map((carrito) =>{
      return (
        {
          buyer: {name: name, phone: phone, mail: mail},
          order:{
            producto: carrito.item.name,
            id: carrito.item.id,
            items: cart.length,
            total : totalPrice(),
          }
      }
      )
    }
    )

  const db = getFirestore()
  const orderObj = Object.assign({}, newOrder);

  db.collection('orders')
    .add(orderObj)
    .then((res)=> {
      console.log("compra realizada", res.id)
      console.log(orderObj);
      navigate(`/CheckOut/${res.id}`)
      deleteAll()
    })

  }


  
    


  return (
    <>
{cart.length === 0 ?
<>
<div className="NoProducts">
<p>No hay productos</p>
<button onClick={() => navigate(`/products`)}>Ir a comprar</button>
</div>
</>
: 

    cart.map((purchase) => {
      return (
        <>
        <div className="CartContainer" key={purchase.item}>
          <div className="NameContainer">
          <img className="CartImg"  src={purchase.item.img} alt="" />
          <p className="CartName">{purchase.item.name}</p>
          <p className="CartQty">{purchase.quantity}</p>
          <p className="CartPrice">${purchase.item.price}</p>
          </div>
          <div className="RemoveContainer">
          <button onClick={()=> removeItem(purchase.item.id)}>
            Eliminar
          </button>
          </div>
        </div>
      </>
      );
    } )
}
    <>
    <p>Total: ${totalPrice()}</p>
        <form className="CartForm" onSubmit={handleSubmit}>
          <label htmlFor="name">
          <input className="CartInput"
            type="text"
            id="name"
            name="name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ></input>
            </label>
          <label htmlFor="phone">
          <input className="CartInput"
            type="number"
            id="phone"
            name="phone"
            placeholder="Telefono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            ></input>
            </label>
            <label>
          <input className="CartInput"
            type="email"
            id="mail"
            name="mail"
            placeholder="Mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            ></input></label>
          <input className="submit"
            type="submit" value="Finalizar compra"
            />
        </form>
    <div className="CartbtnContainer">
    <button onClick={deleteAll}>Eliminar todo</button>
    <button onClick={() => navigate(`/products`)}>Seguir comprando</button>
    </div>   
    </>
    </>
  )
};
export default CartPage



