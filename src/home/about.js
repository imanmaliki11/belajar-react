import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

function About() {
    return (
        <Jumbotron>
            <h1>Hello!</h1>
            <p>
                Anda dapat mengunduh CV saya dibawah!
            </p>
            <p>
                <Button variant="primary">Download</Button>
            </p>
        </Jumbotron>
    );
}

export default About;