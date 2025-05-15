import React from 'react';

const SecondHeader = () => {

  return (
    <header className="relative w-full bg-[#CFEDF2] overflow-hidden min-h-[60vh] flex items-center justify-center px-4">
      {/* Texte */}
      <div className="relative z-10 text-white max-w-xl">
        <span className="text-lg md:text-3xl font-bold  mb-4">
          Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.
        </span>
      </div>

      {/* Fruits décoratifs flottants */}
      <img src="/images/carotte.png" alt="carotte" className="absolute w-12 lg:w-15 top-15 md:top-32 md:right-[30%] animate-bounce-slow" />
      <img src="/images/paper.png" alt="cow" className="absolute w-8 lg:w-12 md:top-[45%] md:right-10 animate-wiggle" />
      <img src="/images/poire.png" alt="poire" className="absolute w-12 lg:w-15 md:top-[25%] md:right-10 animate-wiggle" />
      <img src="/images/patate.png" alt="kiwi" className="absolute w-15 lg:w-18 top-80 md:right-[50%] lg:top-70 lg:right-[25%] animate-bounce-slow" />
      <img src="/images/mais.png" alt="bee" className="absolute w-15 lg:w-18 md:top-50 md:right-[15%] lg:top-40 animate-float" />
      <img src="/images/pasteque.png" alt="banana" className="absolute w-12 lg:w-18 md:top-[60%] lg:top-[65%] md:left-[60%] animate-bounce-slow" />
      <img src="/images/abeille.png" alt="apple" className="absolute w-12 lg:w-18 md:top-[35%] md:left-[15%] lg:top-[25%] lg:left-[30%] animate-float" />
      <img src="/images/fraise.png" alt="banana" className="absolute w-12 lg:w-18 md:top-[60%] md:left-[15%] animate-bounce-slow" />
      <img src="/images/mango.png" alt="apple" className="absolute w-12 lg:w-18 top-[70%] md:left-[75%] lg:left-[85%] animate-float" /> 
    </header>
  );
};

export default SecondHeader;
