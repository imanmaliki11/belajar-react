import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import icon from './../img/iman.jpg';

function Contact() {
    return(
        <div className="container px-5">
            <h1 className="mb-2 font-nav">My Contact</h1>
                <Row>
                    <Col sm className="px-3">
                        <Row className="justify-content-center">
                            <h5 className="font-name">IMAN MALIKI</h5>
                        </Row>
                        <Row className="justify-content-center">
                            <Col sm={8} className="p-3">
                                <img className="img-square rounded" src={icon} alt="Iman Maliki" />
                            </Col>
                        </Row>
                        <Row className="text-justify px-2">
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

                    <Col sm className="px-3">
                        <Row className="justify-content-center mb-2">
                            <h4 className="font-name">Contact</h4>
                        </Row>
                        <Row className="justify-content-start px-2 mb-4">
                            <h4 className="font-name">
                                <img alt="googel" className="mr-2" src="https://img.icons8.com/cute-clipart/64/000000/google-logo.png"/>
                                imanmaliki11[at]gmail[dot]com
                            </h4>
                        </Row>
                        <Row className="justify-content-start px-2 mb-4">
                            <h4 className="font-name"> 
                                <img alt="ig" className="mr-2" src="https://img.icons8.com/cute-clipart/64/000000/phone.png"/>
                                +62838 6099 3225
                            </h4>
                        </Row>
                        <Row className="justify-content-start px-2 mb-4">
                            <h4 className="font-name text-justify"> 
                            <img alt="linkedin" className="mr-2" src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png"/>
                                imanmaliki11
                            </h4>
                        </Row>
                        <Row className="justify-content-start px-2 mb-4">
                            <h4 className="font-name text-justify"> 
                                <img alt="ig" className="mr-2" src="https://img.icons8.com/cute-clipart/64/000000/github.png"/>
                                GitHub.com/imanmaliki11
                            </h4>
                        </Row>
                        <Row className="justify-content-start px-2 mb-4">
                            <h4 className="font-name"> 
                                <img alt="ig" className="mr-2" src="https://img.icons8.com/cute-clipart/64/000000/instagram-new.png"/>
                                imanmalikii
                            </h4>
                        </Row>
                    </Col>
                </Row>
            </div>
    );
}

export default Contact;