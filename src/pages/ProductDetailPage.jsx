import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../product";
import Spinner from "react-bootstrap/Spinner"
import { useNavigate } from "react-router-dom"
import { getFirestore } from "../firebase/index"


const ItemDetailPage = () => {

  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  
  
  useEffect(() => {
    setLoading(true)
    const db = getFirestore()
    const productsCollection = db.collection('product')
    const selectedProduct = productsCollection.doc(id)

    selectedProduct.get().then((response) => {
      if(!response.exists) console.log("producto no existe")
      setProducts({...response.data(), id: response.id})
    })
    .catch(setError(error))
    .finally(setLoading(false))
  }, [id]);

  return (
      <>
      {loading ? (<Spinner animation="border" variant="secondary" />)
        : 
      <ItemDetail product={products} />
      }
      <button onClick={() => navigate(`/products`)}>volver</button>
      
    </>
  );
;}
export default ItemDetailPage;