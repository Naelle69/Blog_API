import React from 'react';
import Navbar from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';
import Login from '../components/LoginComponent';

function LoginPage() {
    return (
        <div className="App">
            <Navbar />
               
            <Login />
        
            <Footer />
        </div>
    )
}

export default LoginPage;