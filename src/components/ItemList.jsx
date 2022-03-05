import { getProducts } from "../product"
import { useEffect, useState } from "react"
import Item from "./Item"
import Spinner from "react-bootstrap/Spinner"
import { CartContext } from "../context//CartContext"
import { getFirestore } from "../firebase"


const ItemList = () =>{
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
  useEffect(()=> {
    setLoading(true)
    const db = getFirestore()
    const productsCollection = db.collection('product')
    const getDataFromFirestore = async () => {
      try{
      const response = await productsCollection.get()
      if(response.empty) 
        console.log("No hay productos");
      setProducts(response.docs.map(doc => ({...doc.data(), id: doc.id})))
    } catch(err){
      setError(err)
    }finally{
      setLoading(false)
    }
  }
    getDataFromFirestore()
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