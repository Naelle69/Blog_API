// src/components/PostesComponent.jsx
import React, { useEffect, useState } from 'react';

const Card = ({ title, description, image, buttonLabel }) => {
  return (
    <div className="bg-[#ffffff] rounded-lg border-2 border-[#CFEDF2] shadow-md overflow-hidden">
      <div className="bg-[#CFEDF2] rounded-b-lg">
        <div className="p-4 flex items-center justify-center h-64 sm:h-72 md:h-80">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain p-10 md:p-8 lg:p-12"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <button className="bg-[#ECCFC8] hover:bg-[#e7c8c0] text-[#373737] font-semibold py-3 px-6 rounded">
          {buttonLabel || 'Découvrir'}
        </button>
      </div>
    </div>
  );
};

const PostesComponent = () => {
  const postsPerPage = 6;
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Appel API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        // Ajout d'une image par défaut à chaque post (Car l'API NE PROPOSE PAS D'IMAGE)
        const postsWithImages = data.map(post => ({
          id: post.id,
          title: post.title,
          description: post.body,
          image: '/images/pngegg (25).png', // image par défaut
          buttonLabel: 'Découvrir',
        }));

        setPosts(postsWithImages);
      } catch (error) {
        console.error("Erreur lors de la récupération des posts :", error);
      }
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const currentPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="p-5 md:p-15 lg:p-32 bg-[#FDF9AA]">
      <h2 className="text-sm md:text-md lg:text-lg text-[#373737] font-bold pb-5 md:pb-10">POSTES API</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <div className="flex justify-center mt-8 items-center gap-4">
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
