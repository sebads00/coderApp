import { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({stock, initial}) => {

    const [counter, setCounter] = useState(initial);
    
    const sumar = () => { if(counter < stock){
        setCounter (counter + 1)
    }else {
        alert("No hay mas en stock")
    };
    }
    const restar = () => { if(counter > initial){
        setCounter (counter - 1)
    };
    }
return (
<div className="CounterContainer">
    <button className="CounterBtn"  onClick={restar} variant="success">-</button>
    <p>{counter}</p>
    <button className="CounterBtn" onClick={sumar} variant="success">+</button> 

</div>
)
}
export default ItemCount