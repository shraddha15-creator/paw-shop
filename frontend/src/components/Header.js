import React from "react";
import '../components/Header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar className="Navbar" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">PawShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end">
          <Nav
            className="ml-auto"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/cart"><i className="fa fa-shopping-cart"></i>Cart</Nav.Link>
            <Nav.Link href="/signin"><i className="fa fa-user"></i>Sign In</Nav.Link>
            {/* <Nav.Link href="/signup" disabled>
              Sign Up
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
