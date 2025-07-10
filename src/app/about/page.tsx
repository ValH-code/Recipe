import React from 'react';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            À propos de Mes Recettes
          </h1>
          <p className="text-xl text-gray-600">
            Votre compagnon culinaire pour découvrir et partager de délicieuses recettes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-4">🍳</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Notre Mission</h3>
            <p className="text-gray-600">
              Nous croyons que la cuisine est un art accessible à tous. Notre mission est de 
              vous accompagner dans vos aventures culinaires avec des recettes testées et 
              approuvées, des instructions claires et des conseils pratiques.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-4">👨‍🍳</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Nos Valeurs</h3>
            <p className="text-gray-600">
              Authenticité, simplicité et plaisir de cuisiner. Chaque recette est 
              soigneusement sélectionnée pour vous garantir des résultats savoureux 
              et vous faire découvrir les richesses de la gastronomie française.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Comment ajouter de nouvelles recettes
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mr-4 flex-shrink-0">
                1
              </span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Modifier le fichier des données</h4>
                <p className="text-gray-600">
                  Ouvrez le fichier <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/data/recipes.ts</code> 
                  et ajoutez votre nouvelle recette à l'array <code className="bg-gray-100 px-2 py-1 rounded text-sm">recipes</code>.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mr-4 flex-shrink-0">
                2
              </span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Structure de la recette</h4>
                <p className="text-gray-600 mb-3">Chaque recette doit respecter cette structure :</p>
                <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
{`{
  id: 'identifiant-unique',
  title: 'Nom de la recette',
  description: 'Description courte',
  image: 'URL de l\'image',
  ingredients: ['ingrédient 1', 'ingrédient 2'],
  steps: ['étape 1', 'étape 2'],
  cookingTime: 30, // en minutes
  difficulty: 'Facile' | 'Moyen' | 'Difficile',
  servings: 4 // nombre de personnes
}`}
                </pre>
              </div>
            </div>

            <div className="flex items-start">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mr-4 flex-shrink-0">
                3
              </span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Images</h4>
                <p className="text-gray-600">
                  Utilisez des images de haute qualité depuis des sites comme Pexels ou Unsplash. 
                  Assurez-vous que l'URL est accessible et que l'image représente bien le plat.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mr-4 flex-shrink-0">
                4
              </span>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Test et validation</h4>
                <p className="text-gray-600">
                  Après avoir ajouté votre recette, lancez <code className="bg-gray-100 px-2 py-1 rounded text-sm">yarn dev</code> 
                  pour vérifier que tout fonctionne correctement et que votre recette s'affiche bien.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Conseils pour de bonnes recettes
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Soyez précis dans les quantités et les temps de cuisson
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Détaillez chaque étape pour que même un débutant puisse suivre
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Ajoutez des conseils et astuces dans la description
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Testez votre recette avant de l'ajouter au site
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}