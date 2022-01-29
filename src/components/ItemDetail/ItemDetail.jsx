import CartWidget from "../CartWidget"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({product}) => {
    
    
    return(
    <>
    <div className="ItemDetailContainer">
        <div className="ItemDetailImg">
            <img src={product.img} alt={product.name} />
        </div>    
            <div className="ItemDetail">
                <h1 className="ItemDetailName">{product.name}</h1>
                <p className="ItemDetailDesc">{product.description}</p>
                <span className="ItemDetailPrice">{product.price}</span>
            <div className="ItemDetailBtnContainer">
                <ItemCount initial={1} stock={5} />
                <button className="ItemDetailBtn"><CartWidget />Agregar al carrito</button>    
            </div>    
            </div>
    </div>
    </>
    
)}

export default ItemDetail