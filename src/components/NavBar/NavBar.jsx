/* import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav" */
import CartWidget from "../CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
    <div className="NavBarContainer">
      <div className="NavBar">
        <div className="NavBarLinks">
          <h1 className="NavBarLogo"><Link to="/products">GinLovers</Link></h1>
              <li> <Link to="/products">Productos</Link></li>
              <li><Link to="/category/importado">Importado</Link></li>
              <li><Link to="/category/nacional">Nacional</Link></li>

          </div>
          <div className="Cart">
              <CartWidget/>
          </div>
  </div>
  </div>
  )
}

export default NavBar
