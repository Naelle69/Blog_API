import React, { useState } from 'react';

const SuggestRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeDetails, setRecipeDetails] = useState('');
  const [diet, setDiet] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [mealType, setMealType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      recipeName,
      recipeDetails,
      diet,
      ageGroup,
      difficulty,
      mealType,
    });
    // Ici, tu peux envoyer les données au serveur ou les traiter comme souhaité
  };

  return (
    <div className="bg-white text-[#373737]">
      <h2 className="text-2xl text-[#373737] font-bold mb-6">Je suggère une autre recette</h2>

      {/* Formulaire */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Colonne gauche : Paramètres */}
        <div className="p-6 border-2 border-[#CFEDF2] text-[#373737] rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Paramètres</h3>

          {/* Régime */}
          <label htmlFor="diet" className="block text-sm font-medium mb-2">
            Régime
          </label>
          <select
            id="diet"
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            className="w-full px-4 py-2  border-2 border-[#CFEDF2] text-[#373737] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ECCFC8] transition"
          >
            <option value="">Choisissez un régime</option>
            <option value="vegetarian">Végétarien</option>
            <option value="vegan">Végan</option>
            <option value="gluten-free">Sans gluten</option>
            <option value="dairy-free">Sans lactose</option>
          </select>

          {/* Âge ciblé */}
          <label htmlFor="ageGroup" className="block text-sm font-medium mb-2 mt-4">
            Âge ciblé
          </label>
          <select
            id="ageGroup"
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="w-full px-4 py-2  border-2 border-[#CFEDF2] text-[#373737] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ECCFC8] transition"
          >
            <option value="">Choisissez un âge</option>
            <option value="0-3_months">De 0 à 3 mois</option>
            <option value="4-9_months">De 4 à 9 mois</option>
            <option value="10-18_months">De 10 à 18 mois</option>
            <option value="1_year_plus">Plus d'un an</option>
          </select>

          {/* Difficulté */}
          <label htmlFor="difficulty" className="block text-sm font-medium mb-2 mt-4">
            Difficulté de préparation
          </label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full px-4 py-2  border-2 border-[#CFEDF2] text-[#373737] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ECCFC8] transition"
          >
            <option value="">Choisissez une difficulté</option>
            <option value="easy">Facile</option>
            <option value="medium">Moyenne</option>
            <option value="hard">Difficile</option>
          </select>

          {/* Type de repas */}
          <label htmlFor="mealType" className="block text-sm font-medium mb-2 mt-4">
            Type de repas
          </label>
          <select
            id="mealType"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            className="w-full px-4 py-2  border-2 border-[#CFEDF2] text-[#373737] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ECCFC8] transition"
          >
            <option value="">Choisissez un type de repas</option>
            <option value="breakfast">Petit-déjeuner</option>
            <option value="lunch">Déjeuner</option>
            <option value="snack">Goûter</option>
            <option value="dinner">Dîner</option>
          </select>
        </div>

        {/* Ma recette */}
        <div className="p-6 border-2 border-[#CFEDF2] text-[#373737] rounded-lg">
          {/* Nom de la recette */}
          <label htmlFor="recipeName" className="block text-sm font-medium mb-2">
            Nom de ma recette
          </label>
          <input
            type="text"
            id="recipeName"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
            className="w-full px-4 py-2  border-2 border-[#CFEDF2] text-[#373737] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ECCFC8] transition"
          />

          {/* Détails de la recette */}
          <label htmlFor="recipeDetails" className="block text-sm font-medium mb-2 mt-4 ">
            Détails de ma recette
          </label>
          <textarea
            id="recipeDetails"
            value={recipeDetails}
            onChange={(e) => setRecipeDetails(e.target.value)}
            required
            rows={5}
            className="w-full px-4 py-2  border-2 border-[#CFEDF2] text-[#373737] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ECCFC8] transition resize-none"
          ></textarea>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            className="mt-4 w-full bg-[#ECCFC8] hover:bg-[#e7c8c0] text-[#373737] font-semibold py-2 px-4 rounded-lg transition"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default SuggestRecipe;

