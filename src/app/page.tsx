'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import SearchBar from '@/components/SearchBar';
import RecipeCard from '@/components/RecipeCard';
import { mockRecipes } from '@/data/recipes';
import { Recipe } from '@/types/recipe';

export default function Home() {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(mockRecipes);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setFilteredRecipes(mockRecipes);
      return;
    }

    const filtered = mockRecipes.filter(recipe => 
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredRecipes(filtered);
  };

  useEffect(() => {
    setFilteredRecipes(mockRecipes);
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Découvrez nos délicieuses recettes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explorez notre collection de recettes traditionnelles et modernes, 
            parfaites pour tous les niveaux de cuisine.
          </p>
        </div>

        <SearchBar onSearch={handleSearch} />

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">
            {filteredRecipes.length} recette{filteredRecipes.length !== 1 ? 's' : ''} trouvée{filteredRecipes.length !== 1 ? 's' : ''}
          </h2>
          <div className="text-sm text-gray-500">
            Triées par popularité
          </div>
        </div>

        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucune recette trouvée
            </h3>
            <p className="text-gray-500">
              Essayez avec des mots-clés différents ou parcourez toutes nos recettes.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
