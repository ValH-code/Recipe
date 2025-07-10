'use client';

import { useState, useEffect, useMemo } from 'react';
import Layout from '@/components/Layout';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';
import RecipeCard from '@/components/RecipeCard';
import RecipeStats from '@/components/RecipeStats';
import Toast, { useToast } from '@/components/Toast';
import { mockRecipes } from '@/data/recipes';
import { Recipe, FilterOptions } from '@/types/recipe';

export default function Home() {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(mockRecipes);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentFilters, setCurrentFilters] = useState<Partial<FilterOptions>>({});
  const [sortBy, setSortBy] = useState('popularity');
  const [favorites, setFavorites] = useState<string[]>([]);
  const { toast, showToast, hideToast } = useToast();

  // Récupérer les catégories uniques
  const categories = useMemo(() => {
    return Array.from(new Set(mockRecipes.map(recipe => recipe.category)));
  }, []);

  // Fonction de filtrage et tri
  const filterAndSortRecipes = useMemo(() => {
    let filtered = mockRecipes;

    // Filtrage par recherche
    if (searchTerm.trim()) {
      filtered = filtered.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        recipe.tags?.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Filtrage par catégorie
    if (currentFilters.category) {
      filtered = filtered.filter(recipe => recipe.category === currentFilters.category);
    }

    // Filtrage par difficulté
    if (currentFilters.difficulty) {
      filtered = filtered.filter(recipe => recipe.difficulty === currentFilters.difficulty);
    }

    // Filtrage par temps maximum
    if (currentFilters.maxTime && currentFilters.maxTime > 0) {
      filtered = filtered.filter(recipe => 
        (recipe.prepTime + recipe.cookTime) <= (currentFilters.maxTime ?? 0)
      );
    }

    // Filtrage végétarien
    if (currentFilters.isVegetarian) {
      filtered = filtered.filter(recipe => recipe.isVegetarian);
    }

    // Filtrage végétalien
    if (currentFilters.isVegan) {
      filtered = filtered.filter(recipe => recipe.isVegan);
    }

    // Tri
    switch (sortBy) {
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'prepTime':
        filtered.sort((a, b) => (a.prepTime + a.cookTime) - (b.prepTime + b.cookTime));
        break;
      case 'difficulty':
        const difficultyOrder = { 'facile': 1, 'moyen': 2, 'difficile': 3 };
        filtered.sort((a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty]);
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Par popularité (ordre par défaut)
        break;
    }

    return filtered;
  }, [searchTerm, currentFilters, sortBy]);

  useEffect(() => {
    setFilteredRecipes(filterAndSortRecipes);
  }, [filterAndSortRecipes]);

  // Gestion des favoris
  const toggleFavorite = (recipeId: string) => {
    const recipe = mockRecipes.find(r => r.id === recipeId);
    setFavorites(prev => {
      const isCurrentlyFavorite = prev.includes(recipeId);
      if (isCurrentlyFavorite) {
        showToast(`${recipe?.title} retiré des favoris`, 'info');
        return prev.filter(id => id !== recipeId);
      } else {
        showToast(`${recipe?.title} ajouté aux favoris`, 'success');
        return [...prev, recipeId];
      }
    });
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilter = (filters: Partial<FilterOptions>) => {
    setCurrentFilters(filters);
  };

  const handleSort = (sortOption: string) => {
    setSortBy(sortOption);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Découvrez nos délicieuses recettes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explorez notre collection de recettes traditionnelles et modernes, 
            parfaites pour tous les niveaux de cuisine.
          </p>
        </div>

        {/* Stats */}
        <RecipeStats 
          totalRecipes={mockRecipes.length}
          filteredRecipes={filteredRecipes.length}
          categories={categories}
        />

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Filters */}
        <FilterBar 
          categories={categories}
          onFilter={handleFilter}
          onSort={handleSort}
          currentFilters={currentFilters}
        />

        {/* Results Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 sm:mb-0">
            {filteredRecipes.length} recette{filteredRecipes.length !== 1 ? 's' : ''} trouvée{filteredRecipes.length !== 1 ? 's' : ''}
          </h2>
          {searchTerm && (
            <span className="text-sm text-gray-500">
              Résultats pour &quot;{searchTerm}&quot;
            </span>
          )}
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map(recipe => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe}
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.includes(recipe.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              Aucune recette trouvée
            </h3>
            <p className="text-gray-500 mb-4">
              Aucune recette ne correspond à vos critères de recherche.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setCurrentFilters({});
              }}
              className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Favorites Section */}
        {favorites.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Mes recettes favorites ({favorites.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockRecipes
                .filter(recipe => favorites.includes(recipe.id))
                .slice(0, 3)
                .map(recipe => (
                  <RecipeCard 
                    key={`fav-${recipe.id}`} 
                    recipe={recipe}
                    onToggleFavorite={toggleFavorite}
                    isFavorite={true}
                  />
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Toast notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </Layout>
  );
}
