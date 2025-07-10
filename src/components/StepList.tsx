import { StepListProps } from '@/types/recipe';

export default function StepList({ steps }: StepListProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Étapes de préparation
      </h3>
      
      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start">
            <span className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
              {index + 1}
            </span>
            <div className="flex-1 pt-1">
              <p className="text-gray-700 leading-relaxed">{step}</p>
            </div>
          </li>
        ))}
      </ol>
      
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <p className="text-sm text-green-800">
          <strong>Conseil :</strong> Lisez toutes les étapes avant de commencer et assurez-vous d&apos;avoir tous les ustensiles nécessaires !
        </p>
      </div>
    </div>
  );
}
