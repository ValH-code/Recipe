import { IngredientListProps } from '@/types/recipe';

export default function IngredientList({ ingredients }: IngredientListProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
        Ingrédients
      </h3>
      
      <ul className="space-y-2">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
            <span>{ingredient}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 p-4 bg-orange-50 rounded-lg">
        <p className="text-sm text-orange-800">
          <strong>Astuce :</strong> Préparez tous vos ingrédients avant de commencer la cuisson pour un résultat optimal !
        </p>
      </div>
    </div>
  );
}
