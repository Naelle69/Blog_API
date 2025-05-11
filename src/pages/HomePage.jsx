import React from 'react';
import Navbar from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';
import HeroHeader from '../components/HeroHeader';
import ThemesComponent from "../components/ThemesComponent.jsx"; 
import PostesComponent from '../components/PostesComponent.jsx';

function HomePage() {
    return (
        <div className="App">
            <Navbar />
            <HeroHeader />
               
            <ThemesComponent />
            <PostesComponent />
        
            <Footer />
        </div>
    )
}

export default HomePage;