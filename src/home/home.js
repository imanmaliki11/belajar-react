import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import icon from './../img/avatar.jpg';

function Home() {
  return (
    <div className="fullpage">
      <div className="container">
        <Row className="justify-content-center">
          {/* <img className="img-avatar my-2" src="https://cdn2.iconfinder.com/data/icons/men-avatars/33/man_9-512.png"
          alt="avatar" /> */}
          <img className="img-avatar my-2" src={icon}
          alt="avatar" />
        </Row>
        <Row className="justify-content-center">
          <Col sm={7}>
            <h3 className="font-body py-3">
            Pemrograman adalah proses menulis, menguji dan memperbaiki,
            dan memelihara kode yang membangun suatu program komputer.
            Kode ini ditulis dalam berbagai bahasa pemrograman
            </h3>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Button variant="outline-success">Download CV</Button>{' '}
        </Row>
      </div>
    </div>
  );
}

export default Home;