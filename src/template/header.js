import React from 'react';
import { Navbar ,Nav ,NavDropdown, Container } from 'react-bootstrap';

function Top() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <NavDropdown title="Service" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Create CV</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Random Number</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Random Name</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link target="_blank" href="https://www.instagram.com/imanmalikii/">Instagram</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Email
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Top;
