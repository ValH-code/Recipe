import { RecipeStatsProps } from '@/types/recipe';

export default function RecipeStats({ 
  totalRecipes, 
  filteredRecipes, 
  categories 
}: RecipeStatsProps) {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2">
            {totalRecipes}
          </div>
          <div className="text-gray-600">
            Recettes au total
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">
            {categories.length}
          </div>
          <div className="text-gray-600">
            Catégories
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-600 mb-2">
            {filteredRecipes}
          </div>
          <div className="text-gray-600">
            Recettes affichées
          </div>
        </div>
      </div>
    </div>
  );
}
