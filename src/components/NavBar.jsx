import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Products</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
      <Nav.Link href="#cart"><CartWidget /></Nav.Link> 
    </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default NavBar