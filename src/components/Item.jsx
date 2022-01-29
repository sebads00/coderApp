import Card from "react-bootstrap/Card"
import { ListGroup, ListGroupItem } from "react-bootstrap"
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom"

const Item = ({product}) => {
return ( <>
<Col sm>
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
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Agregar al carrito</Card.Link>
    <Card.Link> <Link to="">Detalles</Link></Card.Link>

  </Card.Body>
</Card>
</Col>
<br />
</>
)
}

export default Item