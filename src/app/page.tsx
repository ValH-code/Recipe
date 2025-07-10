import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import RecipeCard from '@/components/RecipeCard';
import SearchBar from '@/components/SearchBar';
import { recipes } from '@/data/recipes';
import { Recipe } from '@/types/recipe';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);

  useEffect(() => {
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredRecipes(filtered);
  }, [searchTerm]);

  return (
    <Layout>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Découvrez nos délicieuses recettes
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Une collection de recettes traditionnelles françaises pour régaler vos papilles
          et impressionner vos invités.
        </p>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Rechercher par nom, description ou ingrédient..."
      />

      {filteredRecipes.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Aucune recette trouvée
          </h3>
          <p className="text-gray-600">
            Essayez avec d'autres mots-clés ou parcourez toutes nos recettes.
          </p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir toutes les recettes
            </button>
          )}
        </div>
      ) : (
        <>
          {searchTerm && (
            <div className="mb-6 text-center">
              <p className="text-gray-600">
                {filteredRecipes.length} recette{filteredRecipes.length > 1 ? 's' : ''} trouvée{filteredRecipes.length > 1 ? 's' : ''} pour "{searchTerm}"
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </>
      )}
    </Layout>
  );
}