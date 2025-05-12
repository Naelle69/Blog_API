
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // === Chargement des données utilisateur et posts ===
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Récupère les données utilisateur
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/ ${id}`);
        if (!userResponse.ok) throw new Error("Utilisateur non trouvé");

        const userData = await userResponse.json();
        setUser(userData);

        // Récupère les publications
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId= ${id}`);
        const postsData = await postsResponse.json();
        setPosts(postsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  // === Gestion du chargement et erreurs ===
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDF9AA] p-4">
        <p className="text-lg text-center">Chargement du profil...</p>
      </div>
    );
  }

  if (error === "Utilisateur non trouvé") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDF9AA] px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 text-center">
          <h2 className="text-xl font-bold text-red-500 mb-4">Utilisateur introuvable</h2>
          <p className="mb-6">
            L'utilisateur avec l'ID <strong>{id}</strong> n'existe pas.
          </p>
          <button
            onClick={() => navigate('/login')}
            className="w-full py-3 bg-[#ECCFC8] hover:bg-[#e7c8c0] text-[#373737] font-semibold rounded transition-colors"
          >
            Retour à la connexion
          </button>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDF9AA] p-4">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-xl font-bold text-red-500 mb-4">Erreur</h2>
          <p className="text-gray-700">{error}</p>
          <button
            onClick={() => navigate('/login')}
            className="mt-4 w-full py-2 bg-[#ECCFC8] hover:bg-[#e7c8c0] text-[#373737] font-semibold rounded transition-colors"
          >
            Retour à la connexion
          </button>
        </div>
      </div>
    );
  }

  // === Rendu final responsive ===
  return (
    <div className="bg-[#FDF9AA] min-h-screen py-6 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        
        {/* En-tête */}
        <div className="bg-gradient-to-r from-[#CFEDF2] to-[#ffffff] p-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Bienvenue, {user.name} !
          </h1>
        </div>

        {/* Contenu principal */}
        <div className="p-6 space-y-8">

          {/* Informations utilisateur */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f8f9fa] p-5 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Informations personnelles</h2>
              <ul className="space-y-2 text-left">
                <li><strong>Nom :</strong> {user.name}</li>
                <li><strong>Email :</strong> {user.email}</li>
                <li><strong>Téléphone :</strong> {user.phone || 'Non renseigné'}</li>
              </ul>
            </div>

            <div className="bg-[#f8f9fa] p-5 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Adresse</h2>
              <address className="not-italic space-y-1">
                <p>{user.address.street}, {user.address.suite}</p>
                <p>{user.address.city}, {user.address.zipcode}</p>
                {user.address.geo && (
                  <p>
                    Coordonnées : {user.address.geo.lat}, {user.address.geo.lng}
                  </p>
                )}
              </address>
            </div>
          </section>

          {/* Publications */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vos publications</h2>
            {posts.length > 0 ? (
              <div className="space-y-6">
                {posts.map((post) => (
                  <article key={post.id} className="border-b pb-4">
                    <h3 className="font-bold text-gray-700 text-lg">{post.title}</h3>
                    <p className="text-gray-600 mt-2">{post.body}</p>
                  </article>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">Aucun post disponible.</p>
            )}
          </section>

          {/* Bouton déconnexion */}
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={() => {
                localStorage.removeItem('userId');
                localStorage.removeItem('userName');
                navigate('/login');
              }}
              className="w-full sm:w-auto px-6 py-3 bg-red-100 hover:bg-red-200 text-red-700 font-semibold rounded transition-colors text-center"
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;