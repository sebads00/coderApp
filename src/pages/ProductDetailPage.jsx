import ItemDetail from "../components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../product";
import Spinner from "react-bootstrap/Spinner"
import { useNavigate } from "react-router-dom"


const ItemDetailPage = () => {

  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  
  useEffect(() => {
    setLoading(true)
    getProducts().then((data) => {
      const prodFilter = data.filter((product) => product.id === Number(id));
      setProducts(prodFilter[0]);
      })
      .finally(() => setLoading(false));
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