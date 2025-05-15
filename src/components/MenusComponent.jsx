// src/components/PostesComponent.jsx
import React from 'react';

const Card = ({ title, description, image, buttonLabel }) => {
  return (
    <div className="bg-[#ffffff] rounded-lg border-2 border-[#CFEDF2] shadow-md overflow-hidden">
      <div className="bg-[#CFEDF2] rounded-b-lg">
        {/* Zone d'image centrée */}
        <div className="p-4 flex items-center text-[#373737] justify-center h-64 sm:h-72 md:h-80">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain p-10 md:p-8 lg:p-12"
          />
        </div>
      </div>
      {/* Contenu */}
      <div className="p-6">
        {/* Titre */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-700 mb-4">{description}</p>

        {/* Bouton */}
        <button className="bg-[#ECCFC8] hover:bg-[#e7c8c0] text-[#373737] font-semibold py-3 px-6 rounded">
          {buttonLabel || 'Découvrir le menu'}
        </button>
      </div>
    </div>
  );
};

const  MenusComponent = () => {
  const menusPerPage = 6;

  const menus = [
  /*   {
      mainMenusid: 1,
    
      {
        id: 1,
        title: 'Menu Vegan',
        description: 'Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.',
        image: "/images/pngegg (50).png",
        buttonLabel: 'Découvrir la recette',
        composition: {
          plat:{
            recipeTitle: "Purée de carottes + tomates",
            ingredients: ["Carottes", "Tomates", "Huile d'olive", "Ail", "Sel, poivre"],
            recipe: "1. Lavez les carottes et les tomates.\n2. Faites cuire les carottes à la vapeur pendant 15 min.\n3. Coupez les tomates en dés et faites-les revenir à la poêle.\n4. Mixez le tout avec un peu d’huile d’olive et des épices."
          },
          entree: {
            recipeTitle: "Panecakes pommes de terre + courgettes",
            ingredients: ["Pommes de terre", "Courgettes", "Oignon", "Œufs", "Farine"],
            recipe: "1. Râpez les pommes de terre et les courgettes.\n2. Mélangez avec l’oignon émincé, des œufs battus et une cuillère de farine.\n3. Faites cuire dans une poêle chaude jusqu’à coloration dorée."
          },
          dessert: "moelleux chocolat sans oeuf",
          gouter: "pancake de pommes de terre et courgettes",
        }
      },
      {
        id: 2,
        title: 'Menu Poisson',
        description: 'Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.',
        image: "/images/pngegg (40).png",
        buttonLabel: 'Découvrir la recette',
      },
      {
        id: 3,
        title: 'Menu Viande',
        description: 'Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.',
        image: "/images/pngegg (39).png",
        buttonLabel: 'Découvrir la recette',
      }
    } */

    {
      id: 4,
      title: 'Recette de Salade de Fruits',
      description: 'Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.',
      image: "/images/pngegg (37).png",
      buttonLabel: 'Découvrir la recette',
    },
    {
      id: 5,
      title: 'Recette de Salade de Fruits',
      description: 'Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.',
      image: "/images/pngegg (26).png",
      buttonLabel: 'Découvrir la recette',
    },
    {
      id: 6,
      title: 'Recette de Salade de Fruits',
      description: 'Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.',
      image: "/images/pngegg (37).png",
      buttonLabel: 'Découvrir la recette',
    },
    {
      id: 7,
      title: 'Recette de Salade de Fruits',
      description: 'Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.',
      image: "/images/pngegg (32).png",
      buttonLabel: 'Découvrir la recette',
    },
  ];

  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(menus.length / menusPerPage);

  // Fonctions de navigation
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // menus à afficher selon la page courante
  const currentmenus = menus.slice(
    (currentPage - 1) * menusPerPage,
    currentPage * menusPerPage
  );

  return (
    <div className="p-5 md:p-10 lg:p-24 bg-[#FDF9AA]">
      {/* Grille des cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentmenus.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
            buttonLabel={post.buttonLabel}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 items-center">
      <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded text-[#373737] transition-colors duration-200 ${
            currentPage === 1
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:text-[#111111] active:text-[#000000]'
          }`}
        >
          Précédent
      </button>

        <span className="text-sm text-[#373737] font-bold">
          Page {currentPage} / {totalPages}
        </span>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:text-[#111111] active:text-[#000000]'
          }`}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default MenusComponent;