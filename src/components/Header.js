import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import{BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';
import Cart from '../pages/cart/Cart'
// import Shop from '../pages/shop/Shop';
import Shop from '../pages/shop/Shop'
function Header() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <>
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link as ={Link} to="/" eventKey="1">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/cart" eventKey="2" title="Item">
          Cart
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          NavLink 3 content
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Categories" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Item>
        <Nav.Link eventkey="4">Cart</Nav.Link>
      </Nav.Item>
    </Nav>

    </>
  );
}

export default Header;