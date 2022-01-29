import ItemDetail from "../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"


const ItemDetailPage = () => {
    const {id} = useParams()
    const [products, setProducts] = useState([])

useEffect(() =>{
    const URL = `http://localhost:3001/productos/${id}`
    fetch(URL)
    .then((res) => res.json())
    .then((data) => setProducts(data))
    
}, [id])

    return(
        <>
        <h1>{products.name}</h1>
        <ItemDetail product={products}/>
        </>
    )
}


export default ItemDetailPage