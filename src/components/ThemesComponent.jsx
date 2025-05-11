// ThemesComponent.jsx
import React from 'react';

const ThemesComponent = () => {
  const items = [
    {
      id: 1,
      title: 'Thème 1',
      imageUrl: 'https://via.placeholder.com/300x300.png?text=Th ème+1',
      backgroundColor: '#f8f9fa', // Light gray background
    },
    {
      id: 2,
      title: 'Thème 2',
      imageUrl: 'https://via.placeholder.com/300x300.png?text=Th ème+2',
      backgroundColor: '#e9ecef', // Lighter gray background
    },
    {
      id: 3,
      title: 'Thème 3',
      imageUrl: 'https://via.placeholder.com/300x300.png?text=Th ème+3',
      backgroundColor: '#dee2e6', // Medium gray background
    },
    {
      id: 4,
      title: 'Thème 4',
      imageUrl: 'https://via.placeholder.com/300x300.png?text=Th ème+4',
      backgroundColor: '#ced4da', // Darker gray background
    },
  ];

  return (
    <div className="relative overflow-x-auto scrollbar-hide bg-[#F6F4D6] p-5 md:p-10 lg:p-24">
      {/* Conteneur principal */}
      <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible">
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[250px] md:min-w-0 flex-shrink-0"
          >
            <div className="relative overflow-hidden rounded-lg shadow-md h-full">
              {/* Superposition d'image en arrière-plan */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-75"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              ></div>

              {/* Contenu visible */}
              <div
                className="relative z-10 flex flex-col items-center justify-between h-full p-4 bg-[#ECCFC8] border-2 border-white dark:bg-neutral-800 rounded-lg text-center"
              >
                {/* Image centrée */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-32 h-32 object-contain mb-4 mx-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemesComponent;