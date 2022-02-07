import { getProducts } from "../product"
import { useEffect, useState } from "react"
import Item from "./Item"
import Spinner from "react-bootstrap/Spinner"
import { CartContext } from "../context//CartContext"


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
 /*  const PRODUCT_DATA = {
    name: products.name,
    id: products.id,
    price: products.price
  }
  console.log(CartContext) */
  return(
  <>
    {loading ? (<Spinner animation="border" variant="secondary" />)
        : (products.map((products)=> <Item key={products.id} product={products} />))  
      }
      
      </>
  )
  
}
export default ItemList