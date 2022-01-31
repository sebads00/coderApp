import ItemDetail from "../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"
import { getProducts } from "../product"


const ItemDetailPage = () => {
    const {id} = useParams()
    const [products, setProducts] = useState([])
    const [prodFilter, setProdFilter] = useState([])

useEffect(() =>{
    getProducts()
    .then((data) => setProducts(data))
    console.log(products)
    
    const result = products.filter(product => product.id === Number((id)))
    console.log(result)

    setProdFilter(result)
    console.log(prodFilter)

}, [id])
    return(
        <>
        <ItemDetail product={prodFilter[0]}/>  
        </>
    )
}


export default ItemDetailPage