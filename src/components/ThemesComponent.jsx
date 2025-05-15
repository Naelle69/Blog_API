
// src/components/ThemesComponent.jsx
import React from 'react';

const ThemesComponent = () => {
  const items = [
    {
      id: 1,
      title: 'Viandes',
      image: '/images/pngegg (39).png',
      backgroundColor: '#ECCFC8', // Light gray background
    },
    {
      id: 2,
      title: 'Fruits & Légumes',
      image: '/images/pngegg (53).png',
      backgroundColor: '#ECCFC8', // Lighter gray background
    },
    {
      id: 3,
      title: 'Féculents',
      image: '/images/féculents.png',
      backgroundColor: '#ECCFC8', // Medium gray background
    },
    {
      id: 4,
      title: 'Produits laitiers',
      image: '/images/pngegg (51).png',
      backgroundColor: '#ECCFC8', // Darker gray background
    },
    {
      id: 5,
      title: 'Poissons',
      image: '/images/pngegg (41).png',
      backgroundColor: '#ECCFC8', // Darker gray background
    },
  ];

  return (
    <div className="relative overflow-x-auto scrollbar-hide bg-[#F6F4D6] p-5 md:p-15 lg:p-32">
      {/* Conteneur principal */}
      <div
        className="flex gap-4 overflow-x-auto grid lg:grid-cols-5 lg:overflow-visible"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[250px] md:min-w-0 flex-shrink-0"
          >
            <div
              className="relative overflow-hidden rounded-full shadow-md w-full h-full flex items-center justify-center border-2 border-white"
              style={{ backgroundColor: item.backgroundColor }}
            >
              {/* Image principale */}
              <img
                src={item.image}
                alt={item.title}
                className="w-auto h-1/2 object-cover p-5"
              />

              {/* Contenu visible */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white"
              >
                {/* Titre */}
                <h3 className="text-xl text-[#373737] font-bold mb-2">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemesComponent;