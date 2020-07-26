import React from 'react';
import './../style.css';
import { Nav } from 'react-bootstrap';

function Top() {
  return (
    <Nav className="justify-content-center bg-nav py-2 font-nav" activeKey="/">
    <Nav.Item>
      <Nav.Link className="h4 text-black" eventKey="/" href="/">
        Home
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="h4 text-black" href="/about" eventKey="/about">
        About
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="h4 text-black" href="/portofolio" eventKey="/portofolio">
        Portofolio
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="h4 text-black" href="/contact" eventKey="contact">
        Contact
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className="h4 text-black" href="/project" eventKey="projrct">
        Project
      </Nav.Link>
    </Nav.Item>
  </Nav>
  );
}

export default Top;
