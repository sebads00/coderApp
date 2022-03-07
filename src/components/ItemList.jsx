import { useEffect, useState } from "react"
import Item from "./Item"
import Spinner from "react-bootstrap/Spinner"
import { getFirestore } from "../firebase"
import { useParams } from "react-router-dom"


const ItemList = () =>{
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
const { category } = useParams()

  useEffect(()=> {
    const db = getFirestore()
    let productsCollection;
    if(category){
      productsCollection = db
      .collection('product')
      .where("category", "==", category)
    }else{
      productsCollection = db.collection('product')
    }

    const getDataFromFirestore = async () => {
      setLoading(true)
      try{
      const response = await productsCollection.get()
      if(response.empty) 
        console.log("No hay productos");
      setProducts(response.docs.map(doc => ({...doc.data(), id: doc.id})))
    }catch(err){
      setError(err)
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
    getDataFromFirestore()
  }, [category])
  return(
  <>
    {loading ? (<Spinner animation="border" variant="secondary" />)
        : (products.map((products)=> <Item key={products.id} product={products} />))  
      }
      
      </>
  )
  
}
export default ItemList