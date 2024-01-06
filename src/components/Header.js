import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import{BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
// import Cart from '../pages/cart/Cart'
// import Shop from '../pages/shop/Shop'
import { BsCart } from 'react-icons/bs';
import { useContext } from 'react';
import AuthContext from '../user/context/AuthContext';

function Header() {
  // const {name} = useContext(AuthContext);
// const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <>
    <Nav variant="pills" activeKey="1" >
      <Nav.Item>
        <Nav.Link as ={Link} to="/" eventKey="1">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/cart" eventKey="2" title="Item">
         {/* {name} */}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='/login' eventKey="3" >
          Login
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Categories" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item className="ms-auto">
          <Nav.Link as={Link} to="/cart" eventkey="4">
            <BsCart size={20} /> {/* Cart icon */}
          </Nav.Link>
        </Nav.Item>
    </Nav>
    </>
  );
}

export default Header;