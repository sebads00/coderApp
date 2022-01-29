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
          <h1 className="NavBarLogo"><Link to="/">sneakers</Link></h1>
              <li><Link to="/">Home</Link></li>
              <li> <Link to="/products">Products</Link></li>
              <li><Link to="/about">About</Link></li>
          </div>
          <div className="Cart">
              <CartWidget/>
          </div>
  </div>
  </div>
  )
}

export default NavBar
