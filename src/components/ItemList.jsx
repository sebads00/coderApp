import { getProducts } from "../product"
import { useEffect, useState } from "react"
import Item from "./Item"
import Spinner from "react-bootstrap/Spinner"


const ItemList = () =>{
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true);
    getProducts()
    .then((data) => setProducts(data))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
  }, [])
  
  return(
  <>
    {loading ? (<Spinner animation="border" variant="secondary" />)
        : (products.map((products)=> <Item key={products.id} product={products} />))  
      }
      </>
  )
}
export default ItemList