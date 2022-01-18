import Card from "react-bootstrap/Card"
import { ListGroup, ListGroupItem } from "react-bootstrap"
import ItemCount from "./ItemCount/ItemCount"

const Item = ({product}) => {
return ( <>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.img}/>
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
        {product.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>${product.price}</ListGroupItem>
    <ListGroupItem><ItemCount key={product.id} stock={5} initial={1} /></ListGroupItem>
     
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Agregar al carrito</Card.Link>
    <Card.Link href="#">Detalles</Card.Link>
    
  </Card.Body>
</Card>
</>
)
}

export default Item