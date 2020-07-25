import React from 'react';
import './../style.css';
import { Nav } from 'react-bootstrap';

function Top() {
  return (
    <Nav className="justify-content-center bg-nav py-2" activeKey="/">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/portofolio" eventKey="/portofolio">Portofolio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/contact" eventKey="contact">Contact</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/project" eventKey="projrct">
        Project
      </Nav.Link>
    </Nav.Item>
  </Nav>
  );
}

export default Top;
