import React from 'react';
import Navbar from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';
import Profile from '../components/ProfileComponent';

function ProfilePage() {
    return (
        <div className="App">
            <Navbar />
               
            <Profile />
        
            <Footer />
        </div>
    )
}

export default ProfilePage;