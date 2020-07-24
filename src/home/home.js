import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert'

function Home() {
  return (
    <Alert variant="success">
        <Alert.Heading>Hey, Selamat Datang!</Alert.Heading>
        <p>
            Senang melihat adna mengunjungi website saya!
        </p>
        <hr />
        <p className="mb-0">
            Coba suatu hal baru dan buat perubahan dalam hidup anda.
        </p>
    </Alert>
  );
}

export default Home;