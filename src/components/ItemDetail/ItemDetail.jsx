import CartWidget from "../CartWidget"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = () => {
    
    
    return(
    <>
    <div className="ItemDetailContainer">
        <div className="ItemDetailImg">
            <img src="https://picsum.photos/200" alt="" />
        </div>    
            <div className="ItemDetail">
                <h1 className="ItemDetailName">Zapatillas</h1>
                <p className="ItemDetailDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    d magni illum fugiat exercitationem itaque pariatur quibusdam, 
                    perspiciatis dolor possimus porro non voluptatum blandi</p>
                <span className="ItemDetailPrice">$120</span>
            <div className="ItemDetailBtnContainer">
                <ItemCount initial={1} stock={5} />
                <button className="ItemDetailBtn"><CartWidget />Agregar al carrito</button>    
            </div>    
            </div>
    </div>
    </>
    
)}

export default ItemDetail