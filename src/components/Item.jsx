import Card from "react-bootstrap/Card"
import { ListGroup, ListGroupItem } from "react-bootstrap"
import Col from 'react-bootstrap/Col'
import {Link} from "react-router-dom"

const Item = ({product}) => {
return ( <>
<Col sm>
<Card style={{ width: '18rem', borderBottom:'10rem'}}>
  <Card.Img variant="top" src={product.img}/>
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>
      <>
        {product.description}
        <p>Origen: {product.category} </p>
      </>
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>${product.price}</ListGroupItem>  
  </ListGroup>
  <Card.Body>
    <Card.Link> <Link to={`/products/${product.id}`}>Ver mas</Link></Card.Link>

  </Card.Body>
</Card>
</Col>
<br />
</>
)
}

export default Item