import React from 'react';
import LoginButton from '../components/LoginButton';

const HeroHeader = () => {

  return (
    <header className="relative w-full bg-[#CFEDF2] overflow-hidden min-h-screen flex items-center justify-center px-4">
      {/* Texte */}
      <div className="relative z-10 text-white max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Lorem ipsum</h1>
        <p className="text-lg md:text-xl font-bold  mb-4">
          Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.
        </p>
        <LoginButton />
      </div>

      {/* Fruits décoratifs flottants */}
      <img src="/images/carotte.png" alt="carotte" className="absolute w-15 top-15 md:top-32 md:right-[30%] animate-bounce-slow" />
      <img src="/images/paper.png" alt="cow" className="absolute w-12 md:top-[45%] md:right-10 animate-wiggle" />
      <img src="/images/poire.png" alt="poire" className="absolute w-15 md:top-[35%] md:right-10 animate-wiggle" />
      <img src="/images/patate.png" alt="kiwi" className="absolute w-18 md:top-80 md:right-[35%] lg:top-70 lg:right-[25%] animate-bounce-slow" />
      <img src="/images/mais.png" alt="bee" className="absolute w-18 md:top-50 md:right-[15%] lg:top-40 animate-float" />
      <img src="/images/pasteque.png" alt="banana" className="absolute w-15 md:top-[70%] lg:top-[50%] md:left-[60%] animate-bounce-slow" />
      <img src="/images/abeille.png" alt="apple" className="absolute w-15 md:top-[35%] md:left-[15%] lg:top-[25%] lg:left-[30%] animate-float" />
      <img src="/images/fraise.png" alt="banana" className="absolute w-18 md:top-[60%] md:left-[75%] animate-bounce-slow" />
      <img src="/images/mango.png" alt="apple" className="absolute w-15 md:top-[45%] md:left-[75%] lg:left-[85%] animate-float" />


      {/* Bébé & légumes positionnés en bas à droite */}
      <div className="absolute bottom-0 right-0 flex items-end pr-4">
        <img src="/images/legumes.png" alt="legumes" className="w-48 md:w-72 lg:w-100" />
        <img src="/images/baby.png" alt="baby" className="w-40 md:w-75 lg:w-100 " />
      </div>
    </header>
  );
};

export default HeroHeader;
