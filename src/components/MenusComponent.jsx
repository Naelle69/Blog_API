// src/components/PostesComponent.jsx
import React from 'react';

const Card = ({ title, description, image, buttonLabel }) => {
  return (
    <div className="bg-[#ffffff] rounded-lg border-2 border-[#CFEDF2] shadow-md overflow-hidden">
      <div className="bg-[#CFEDF2] rounded-b-lg">
        {/* Zone d'image centrée */}
        <div className="p-4 flex items-center justify-center h-64 sm:h-72 md:h-80">
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
          {buttonLabel || 'Découvrir la recette'}
        </button>
      </div>
    </div>
  );
};

const PostesComponent = () => {
  const postsPerPage = 6;

  const posts = [
    {
      id: 1,
      title: 'Recette de Salade de Fruits',
      description: 'Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.',
      image: "/images/pngegg (25).png",
      buttonLabel: 'Découvrir la recette',
    },
    {
      id: 2,
      title: 'Recette de Salade de Fruits',
      description: 'Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.',
      image: "/images/pngegg (37).png",
      buttonLabel: 'Découvrir la recette',
    },
    {
      id: 3,
      title: 'Recette de Salade de Fruits',
      description: 'Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.',
      image: "/images/pngegg (36).png",
      buttonLabel: 'Découvrir la recette',
    },
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
  const totalPages = Math.ceil(posts.length / postsPerPage);

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

  // Posts à afficher selon la page courante
  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="p-5 md:p-10 lg:p-24 bg-[#FDF9AA]">
      {/* Grille des cartes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPosts.map((post) => (
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

export default PostesComponent;