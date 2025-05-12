// src/components/LoginComponent.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // États du formulaire
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Hook de navigation
  const navigate = useNavigate();

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Récupération de la liste des utilisateurs
      const response = await fetch('https://jsonplaceholder.typicode.com/users ');
      const users = await response.json();

      // Recherche de l'utilisateur par email
      const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

      if (user) {
        // Connexion réussie → sauvegarde locale + redirection
        localStorage.setItem('userId', user.id);
        localStorage.setItem('userName', user.name);
        navigate(`/profile/${user.id}`);
      } else {
        setError("Cet email n'existe pas.");
      }
    } catch (err) {
      setError("Erreur lors de la vérification de l'email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#FDF9AA] min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">

        {/* Titre */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Connexion</h2>

        {/* Dernier utilisateur connecté */}
        {localStorage.getItem('userName') && (
          <p className="text-center text-sm text-gray-500 mb-6">
            Dernière connexion : {localStorage.getItem('userName')}
          </p>
        )}

        {/* Formulaire */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ECCFC8] transition"
              placeholder="Entrez votre email"
            />
          </div>

          {/* Message d'erreur */}
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          {/* Bouton de connexion */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#ECCFC8] hover:bg-[#e7c8c0] text-[#373737] font-semibold py-2 px-4 rounded-lg transition-colors ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Chargement...' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;