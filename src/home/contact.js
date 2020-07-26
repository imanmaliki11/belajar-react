import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import icon from './../img/iman.jpg';

function Contact() {
    return(
        <div className="container px-5 py-2">
            <div className="contact-card rounded px-5 py-2">

            <h1 className="mb-3">My Contact</h1>

                <Row>
                    <Col sm>
                        <Row className="justify-content-center">
                            <h3 className="font-name">IMAN MALIKI</h3>
                        </Row>
                        <Row className="justify-content-center">
                            <Col sm={8} className="p-3">
                                <img className="img-square rounded" src={icon} alt="Iman Maliki" />
                            </Col>
                        </Row>
                        <Row className="text-justify">
                            <p className="font-body">
                                Definisi Merupakan suatu batasan atau arti, bisa juga dimaknai kata,
                                frasa, atau kalimat yang mengungkapkan makna, keterangan, atau ciri
                                utama dari orang, benda, proses, atau aktivitas. Dalam Kamus Besar
                                Bahasa Indonesia, definisi ialah rumusan tentang ruang lingkup dan
                                ciri-ciri suatu konsep yang menjadi pokok pembicaraan. <br></br>
                                Definisi juga diartikan sebagai uraian pengertian yang berfungsi
                                membatasi objek, konsep, dan keadaan berdasarkan waktu dan tempat
                                suatu kajian. Definisi merupakan usaha para ilmuwan untuk membatasi
                                fakta dan konsep.
                            </p>
                        </Row>
                    </Col>
                    <Col sm>
                        Find Me On
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Contact;