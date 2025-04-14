import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import {  Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Kulture254" width={45} height={50} />
            Kulture254
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Navbar.Brand as={Link} to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </Navbar.Brand>
              <Navbar.Brand as={Link} to="/login">
                <Nav.Link>
                  <FaUser /> Sign In
                </Nav.Link>
              </Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
