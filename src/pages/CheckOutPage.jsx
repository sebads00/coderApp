import { useEffect, useState } from "react"
import { getFirestore } from "../firebase";
import { useParams } from "react-router-dom";

export const CheckOutPage = () => {
const {orderId} = useParams()
const [newOrder, setNewOrder] = useState({})


    useEffect(() => {
       const db = getFirestore()
       db.collection('orders')
       .doc(orderId)
       .get()
       .then((res) => setNewOrder({ id: res.id, ...res.data() }
       ))
       .finally(console.log(newOrder))
      }, [orderId]);



    return(
        <>
       <h1>Compra {newOrder.id} exitosa </h1>
        </>

    )




}


