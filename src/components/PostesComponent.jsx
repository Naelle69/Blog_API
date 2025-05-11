// src/pages/HomePage.jsx
// src/components/PostesComponent.jsx
import React from 'react';

const Card = ({ title, description, imageUrl, buttonLabel }) => {
  return (
    
    <div className="bg-[#ffffff] rounded-lg border-2 border-[#CFEDF2] shadow-md overflow-hidden ">
    <div className="bg-[#CFEDF2] rounded-b-lg">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover"
      />
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
  const posts = [
    {
      title: 'Recette de Salade de Fruits',
      description: 'Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.',
      imageUrl: "/images/legumes.png",
      buttonLabel: 'Découvrir la recette',
    },
    {
      title: 'Smoothie Énergétique',
      description: 'Lorem ipsum dolor sit amet consectetur. Faucibus et erat lacus libero a lacus.',
      image: "/images/legumes.png",
      buttonLabel: 'Découvrir la recette',
    },
  ];

  return (
    <div className="p-5 md:p-10 lg:p-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
            <Card
            key={post.title}
            title={post.title}
            description={post.description}
            image={post.image}
            buttonLabel={post.buttonLabel}
            />
        ))}
        </div>
    </div>
  );
};

export default PostesComponent;