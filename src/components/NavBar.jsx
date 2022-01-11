import Container from 'react-bootstrap/Navbar'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function Navegacion() {
  return(
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Tienda</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
)
}

export default Navegacion