import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const ItemDetail = ({product}) => {
    const[quantity, setQuantity] = useState(1);
    const navigate = useNavigate()
    function onAdd(quantityToAdd) {
    setQuantity(quantityToAdd)
    navigate(`/cart`)
}
console.log(quantity)

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
                <ItemCount initial={1} stock={product.stock} onAdd={(quantity) => onAdd(quantity)} />   
            </div>    
            </div>
    </div>
    </>
    
)}

export default ItemDetail