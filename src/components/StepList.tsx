import React from 'react';

interface StepListProps {
  steps: string[];
}

const StepList: React.FC<StepListProps> = ({ steps }) => {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Étapes de préparation
      </h3>
      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mr-4 flex-shrink-0">
              {index + 1}
            </span>
            <p className="text-gray-700 leading-relaxed pt-1">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StepList;