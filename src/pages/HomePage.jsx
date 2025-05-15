import React from 'react';
import Navbar from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';
import HeroHeader from '../components/HeroHeader';
import ThemesComponent from "../components/ThemesComponent.jsx"; 
import PostesComponent from '../components/PostesComponent.jsx';
import MenusComponent from '../components/MenusComponent.jsx';

function HomePage() {
    return (
        <div className="App">
            <div className='min-h-screen'>
                <Navbar />
                <HeroHeader />
            </div>
               
            <ThemesComponent />
            <PostesComponent />
            <MenusComponent />
        
            <Footer />
        </div>
    )
}

export default HomePage;