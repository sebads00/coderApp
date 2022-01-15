import { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({stock, initial}) => {

    const [counter, setCounter] = useState(initial);
    
    const sumar = () => { if(counter < stock){
        setCounter (counter + 1)
    };
    }

    const restar = () => { if(counter > initial){
        setCounter (counter - 1)
    };
    }
return (
<div className="Counter">
    
    <Button onClick={restar} variant="success">-</Button>
    <p>{counter}</p>
    <Button onClick={sumar} variant="success">+</Button> 

</div>
)
}
export default ItemCount