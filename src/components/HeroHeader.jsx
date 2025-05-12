import React from 'react';
import LoginButton from '../components/LoginButton';

const HeroHeader = () => {

  return (
    <header className="relative w-full bg-[#CFEDF2] overflow-hidden min-h-screen flex items-center justify-center px-4">
      {/* Texte */}
      <div className="relative z-10 text-white max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Lorem ipsum</h1>
        <p className="text-lg md:text-xl font-semibold">
          Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.
        </p>
        <LoginButton />
      </div>

      {/* Fruits décoratifs flottants */}
      <img src="/images/carotte.png" alt="kiwi" className="absolute w-12 top-32 right-[30%] animate-bounce-slow" />
      <img src="/images/cow.png" alt="bee" className="absolute w-10 top-40 right-[15%] animate-float" />
      <img src="/images/fraise.png" alt="banana" className="absolute w-12 top-[50%] left-[30%] animate-bounce-slow" />
      <img src="/images/mango.png" alt="apple" className="absolute w-12 top-[40%] left-[10%] animate-float" />
      <img src="/images/paper.png" alt="cow" className="absolute w-12 top-[45%] right-10 animate-wiggle" />
      <img src="/images/poire.png" alt="poire" className="absolute w-12 top-[35%] right-10 animate-wiggle" />

      {/* Bébé & légumes positionnés en bas à droite */}
      <div className="absolute bottom-0 right-0 flex items-end pr-4">
        <img src="/images/legumes.png" alt="legumes" className="w-48 md:w-72 lg:w-100" />
        <img src="/images/baby.png" alt="baby" className="w-40 md:w-75 lg:w-100 " />
      </div>
    </header>
  );
};

export default HeroHeader;
