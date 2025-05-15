import React from 'react';
import Navbar from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';
import Login from '../components/LoginComponent';
import SecondHeader from '../components/SecondHeader';

function LoginPage() {
    return (
        <div className="App">
            <Navbar />
            <SecondHeader />              
                <Login />
            <Footer />
        </div>
    )
}

export default LoginPage;