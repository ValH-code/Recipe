import { useState } from 'react';
import { FilterBarProps, FilterOptions, SortOption } from '@/types/recipe';

const sortOptions: SortOption[] = [
  { value: 'popularity', label: 'Popularité' },
  { value: 'title', label: 'Nom (A-Z)' },
  { value: 'prepTime', label: 'Temps de préparation' },
  { value: 'difficulty', label: 'Difficulté' },
  { value: 'rating', label: 'Note' }
];

export default function FilterBar({ 
  categories, 
  onFilter, 
  onSort, 
  currentFilters 
}: FilterBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFilterChange = (key: keyof FilterOptions, value: string | number | boolean) => {
    onFilter({ ...currentFilters, [key]: value });
  };

  const resetFilters = () => {
    onFilter({});
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="font-medium">Filtres</span>
              <svg 
                className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {Object.keys(currentFilters).length > 0 && (
              <button
                onClick={resetFilters}
                className="text-sm text-orange-600 hover:text-orange-700 transition-colors"
              >
                Réinitialiser
              </button>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Trier par:</span>
            <select
              onChange={(e) => onSort(e.target.value)}
              className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Catégorie */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie
                </label>
                <select
                  value={currentFilters.category || ''}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Toutes les catégories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Difficulté */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulté
                </label>
                <select
                  value={currentFilters.difficulty || ''}
                  onChange={(e) => handleFilterChange('difficulty', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Toutes les difficultés</option>
                  <option value="facile">Facile</option>
                  <option value="moyen">Moyen</option>
                  <option value="difficile">Difficile</option>
                </select>
              </div>

              {/* Temps maximum */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Temps max (min)
                </label>
                <input
                  type="number"
                  value={currentFilters.maxTime || ''}
                  onChange={(e) => handleFilterChange('maxTime', parseInt(e.target.value) || 0)}
                  placeholder="120"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Options végétariennes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Options alimentaires
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={currentFilters.isVegetarian || false}
                      onChange={(e) => handleFilterChange('isVegetarian', e.target.checked)}
                      className="rounded text-orange-600 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Végétarien</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={currentFilters.isVegan || false}
                      onChange={(e) => handleFilterChange('isVegan', e.target.checked)}
                      className="rounded text-orange-600 focus:ring-orange-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">Végétalien</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
