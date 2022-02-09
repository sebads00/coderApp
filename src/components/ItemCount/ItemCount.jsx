

const ItemCount = ({stock, initial, counter, setCounter}) => {
    
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
</>
)
}
export default ItemCount