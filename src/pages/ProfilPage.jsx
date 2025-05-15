import React from 'react';
import Navbar from '../components/NavbarComponent';
import Footer from '../components/FooterComponent';
import Profil from '../components/ProfilComponent';
import SecondHeader from '../components/SecondHeader';

function ProfilPage() {
    return (
        <div className="App">
            <Navbar />
            <SecondHeader />
            <div className="relative bg-[#FDF9AA] py-12 px-4">
                {/* PROFIL qui chevauche */}
                <div className="relative z-10 -mt-32 "> {/* << décalage vers le haut */}
                    <Profil />
                </div>
            </div>
            <div className='bg-[#F6F4D6] relative  w-full h-64 -mt-32'>
                <img src="/images/patate.png" alt="patate" className="absolute w-12 top-32 right-[30%] animate-bounce-slow" />
                <img src="/images/mais.png" alt="mais" className="absolute w-10 top-10 right-[25%] animate-float" />
                <img src="/images/pasteque.png" alt="pasteque" className="absolute w-12 top-[55%] left-[45%] animate-bounce-slow" />
                <img src="/images/abeille.png" alt="abeille" className="absolute w-12 top-[40%] md:top-[60%] left-[20%]  md:left-[5%] animate-float" />
                <img src="/images/fraise.png" alt="fraise" className="absolute w-12 top-[10%] left-[30%] animate-bounce-slow" />
                <img src="/images/mango.png" alt="mango" className="absolute w-12 top-[5%] left-[10%] animate-float" />
                <img src="/images/paper.png" alt="paper" className="absolute w-12 top-[70%] right-[10%] animate-wiggle" />
                <img src="/images/poire.png" alt="poire" className="absolute w-12 top-[0%] right-[10%] animate-wiggle" />
                <img src="/images/legume&fouchette.png" alt="legume&fourchette" className="absolute rotate-320 w-40 z-12 bottom-[20%] lg:right-[85%] right-[75%] animate-wiggle" />
            </div> 
            <Footer />
        </div>
    )
}

export default ProfilPage;