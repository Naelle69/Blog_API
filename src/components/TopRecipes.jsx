// src/components/TopRecipes.jsx
import React from 'react';

const TopRecipes = () => {
  const recipes = [
    {
      id: 1,
      title: 'Lotte haricots verts / compote pomme figue / purée courgette',
      imageUrl: '/images/recipe1.jpg',
      tag: 'VENDREDI',
      ageRange: '6-9 mois'
    },
    {
      id: 2,
      title: 'Poires vapeur et tuile choco-miel',
      imageUrl: '/images/recipe2.jpg',
      tag: '',
      ageRange: ''
    },
    {
      id: 3,
      title: 'Compote pomme-cannelle et coulis de fraises',
      imageUrl: '/images/recipe3.jpg',
      tag: '',
      ageRange: ''
    },
    {
      id: 4,
      title: 'Colin au fenouil, millet et orange',
      imageUrl: '/images/recipe4.jpg',
      tag: '',
      ageRange: ''
    },
    {
      id: 5,
      title: 'Papillote de dinde / compote pomme-banane / Potiron',
      imageUrl: '/images/recipe5.jpg',
      tag: 'LUNDI',
      ageRange: '6-9 mois'
    }
  ];

  return (
    <div className="bg-[#FDF9AA] p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold mb-6">Top 5</h2>
      <ul className="space-y-6">
        {recipes.map((recipe) => (
          <li key={recipe.id} className="flex items-start gap-4">
            {/* Image */}
            <div className="relative w-20 h-20 bg-gray-200 rounded overflow-hidden">
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
              {/* Étiquette (si présente) */}
              {recipe.tag && (
                <span className="absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded">
                  {recipe.tag}
                </span>
              )}
              {/* Âge ciblé (si présent) */}
              {recipe.ageRange && (
                <span className="absolute bottom-2 left-2 px-2 py-1 text-xs font-bold text-white bg-green-500 rounded">
                  {recipe.ageRange}
                </span>
              )}
            </div>

            {/* Titre */}
            <div>
              <p className="text-lg font-medium">{recipe.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopRecipes;