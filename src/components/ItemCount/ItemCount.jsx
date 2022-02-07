import { useState } from "react";
import CartWidget from "../CartWidget"
import { useNavigate } from "react-router-dom"

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [counter, setCounter] = useState(initial);
    
    const sumar = () => { if(counter < stock){
        setCounter ((prevState) => prevState + 1)
    }else {
        alert("No hay mas en stock")
    };
    }
    const restar = () => { if(counter > initial){
        setCounter ((prevState) => prevState - 1)
    };
    }
   
return (
    <>
<div className="CounterContainer">
    <button className="CounterBtn"  onClick={restar} variant="success">-</button>
    <p>{counter}</p>
    <button className="CounterBtn" onClick={sumar} variant="success">+</button> 
</div>
  <button className="ItemDetailBtn" onClick={()=>onAdd(counter)} ><CartWidget />Agregar al carrito</button> 
</>
)
}
export default ItemCount