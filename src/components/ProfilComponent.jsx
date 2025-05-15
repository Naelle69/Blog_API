import { useEffect, useState } from "react";
import SuggestRecipe  from "./SuggestRecipe";
import BlogFilter from "./BlogFilter";
import TopRecipes from "./TopRecipes";

export default function Profil() {
  const [utilisateur, setUtilisateur] = useState(null);
  const [posts, setPosts] = useState([]);
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Remplacez 1 par un autre ID si besoin
    const userId = 1;

    // Récupération des infos utilisateur
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUtilisateur(data));

    // Récupération des posts de l'utilisateur
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
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

  if (!utilisateur) {
    return <p className="text-center mt-10">Chargement...</p>;
  }

  const { name, email, phone, address } = utilisateur;
  const utilisateurFinal = {
  name,
  email,
  phone,
  address,
  image: '/images/pngegg (13).png' // J'ajoute en dur une image pour l'utilisateur
};

  return (
    <div className="mx-5 md:mx-15 lg:mx-32 shadow rounded-lg border-2 border-[#CFEDF2] bg-white p-6 md:p-15 space-y-8 md:space-y-20">
      <div className="container mx-auto flex flex-col lg:flex-row py-8 px-4 gap-8">
        <div className="w-full lg:w-2/3 flex flex-col items-center space-y-8">
        <h1 className="text-3xl font-bold mb-4 text-[#373737]">Bienvenue, {name} 👋</h1>
        <h2 className="text-2xl font-bold mb-4 text-[#373737]"> Aujourd'hui, nous partons pour de nouvelles aventures </h2>

        <div className="flex p-6 mb-6 md:space-x-8">
          <div className="w-25 rounded-full shadow-md flex items-center bg-[#ECCFC8] justify-center border-2 border-white">
            <img className="w-auto h-1/2" src={utilisateurFinal.image} alt="Profil" />
          </div>
          <div className="text-[#373737]">
            <h2 className="w-75 text-xl font-semibold mb-4">Informations personnelles</h2>
            <p><strong>Nom :</strong> {name}</p>
            <p><strong>Email :</strong> {email}</p>
            <p><strong>Téléphone :</strong> {phone}</p>
            <p>
              <strong>Adresse :</strong>{" "}
              {address.street}, {address.suite}, {address.city}, {address.zipcode}
            </p>
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl font-bold text-[#373737] mb-4">Users Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentPosts.map((post) => (
            <div key={post.id} className="bg-white shadow rounded-lg p-6 border-2 border-[#CFEDF2] text-[#373737]">
              <h3 className="text-lg font-medium mb-4">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.body}</p>
              <button className="bg-[#ECCFC8] hover:bg-[#e7c8c0] text-[#373737] font-semibold py-3 px-6 rounded">Détails</button>
            </div>
          ))}
          </div>
        </div>

        {/*  Pagination */}
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
        <aside className="w-full lg:w-1/3 flex flex-col space-y-6 shadow rounded-lg border-2 border-[#CFEDF2] bg-white p-6">
            <BlogFilter />
            <TopRecipes />
        </aside>
      </div>
      <SuggestRecipe />
    </div>
    
  );
}
