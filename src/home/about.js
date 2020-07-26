import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col } from 'react-bootstrap'

function About() {
    return (
        <div className="fullpage">
            <div className="container">
                <Row className="justify-content-center">
                <Col sm={7}>
                    <h3 className="font-body text-justify py-3">
                    Steve Jobs lahir pada 24 Februari 1955, di kota San Francisco, California, Amerika Serikat.
                    Ibu kandungnya adalah seorang mahasiswa pascasarjana yang bernama Joanne Simpson dan
                    ayah kandungnya adalah seorang politikus sekaligus profesor matematika berdarah Suriah
                    bernama John Abdulfattah Jandali. Setelah kedua orangtua kandungnya menikah, mereka memiliki
                    anak perempuan yang merupakan adik Steve, Mona Simpson.
                    </h3>
                </Col>
                </Row>
            </div>
        </div>
    );
}

export default About;