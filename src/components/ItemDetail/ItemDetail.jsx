import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useCart} from "../../context/CartContext"
import { AiOutlineShoppingCart } from "react-icons/ai";


const ItemDetail = ({product}) => {
    const {addItem} = useCart()
    const [counter, setCounter] = useState(1)
    const navigate = useNavigate()
    
   const onAdd = () => {
       addItem(product, counter)
       navigate(`/Cart`)
   }
console.log(counter);

    return(
    <>
    <div className="ItemDetailContainer">
        <div className="ItemDetailImg">
            <img src={product.img} alt={product.name} />
        </div>    
            <div className="ItemDetail">
                <h1 className="ItemDetailName">{product.name}</h1>
                <p className="ItemDetailDesc">{product.description}</p>
                <span className="ItemDetailPrice">${product.price}</span>
            <div className="ItemDetailBtnContainer">
                <ItemCount counter={counter} setCounter={setCounter} initial={1} stock={product.stock} />   
            <button className="ItemDetailBtn" onClick={onAdd} ><AiOutlineShoppingCart/>Agregar al carrito</button>
            </div>    
            </div>
    </div>
    </>
    
)}

export default ItemDetail