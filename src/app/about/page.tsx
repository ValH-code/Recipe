import Link from 'next/link';
import Layout from '@/components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            À propos de notre Livre de Recettes
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Bienvenue dans notre collection de recettes ! Cette application a été conçue pour 
              partager et découvrir des recettes délicieuses, des plus traditionnelles aux plus créatives.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🍳 Notre Mission
            </h2>
            <p className="text-gray-600 mb-6">
              Nous croyons que la cuisine est un art accessible à tous. Notre objectif est de 
              rassembler les meilleures recettes et de les présenter de manière claire et attractive 
              pour inspirer cuisiniers débutants et expérimentés.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ✨ Fonctionnalités
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Collection de recettes variées avec photos SVG optimisées</li>
              <li>Recherche intelligente par nom, ingrédients ou catégorie</li>
              <li>Filtres avancés (catégorie, difficulté, temps de préparation, options alimentaires)</li>
              <li>Tri des recettes (nom, temps, difficulté, note)</li>
              <li>Système de favoris avec sauvegarde locale</li>
              <li>Notifications toast pour les actions utilisateur</li>
              <li>Instructions détaillées étape par étape</li>
              <li>Statistiques de recettes et informations nutritionnelles</li>
              <li>Images avec chargement optimisé et fallback</li>
              <li>Interface moderne et entièrement responsive</li>
              <li>Animations fluides et transitions CSS</li>
              <li>Design accessible avec focus et navigation clavier</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🚀 Comment ajouter de nouvelles recettes
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">
                Pour ajouter une nouvelle recette à la collection, suivez ces étapes :
              </p>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>
                  Ouvrez le fichier <code className="bg-gray-200 px-2 py-1 rounded">src/data/recipes.ts</code>
                </li>
                <li>
                  Ajoutez votre recette au tableau <code className="bg-gray-200 px-2 py-1 rounded">mockRecipes</code> 
                  en suivant la structure existante
                </li>
                <li>
                  Assurez-vous d&apos;inclure tous les champs requis :
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>id (unique)</li>
                    <li>title (nom de la recette)</li>
                    <li>description (courte description)</li>
                    <li>image (chemin vers l&apos;image)</li>
                    <li>ingredients (liste des ingrédients)</li>
                    <li>steps (étapes de préparation)</li>
                    <li>prepTime et cookTime (en minutes)</li>
                    <li>servings (nombre de portions)</li>
                    <li>difficulty (facile, moyen, difficile)</li>
                    <li>rating (note sur 5) et tags</li>
                    <li>isVegetarian et isVegan (options alimentaires)</li>
                  </ul>
                </li>
                <li>
                  Ajoutez l&apos;image correspondante au format SVG dans le dossier <code className="bg-gray-200 px-2 py-1 rounded">public/images/</code>
                </li>
                <li>
                  Sauvegardez et rechargez la page pour voir votre nouvelle recette !
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🛠️ Technologies utilisées
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="font-medium text-gray-800">Next.js 15</div>
                <div className="text-sm text-gray-600">App Router</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-medium text-gray-800">Tailwind CSS</div>
                <div className="text-sm text-gray-600">Styling moderne</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">📝</div>
                <div className="font-medium text-gray-800">TypeScript</div>
                <div className="text-sm text-gray-600">Type Safety</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🧵</div>
                <div className="font-medium text-gray-800">Yarn</div>
                <div className="text-sm text-gray-600">Package Manager</div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ✅ Fonctionnalités déjà disponibles
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>✅ Système de favoris avec sauvegarde locale</li>
              <li>✅ Filtres avancés par catégorie, difficulté, temps et options alimentaires</li>
              <li>✅ Tri des recettes par différents critères</li>
              <li>✅ Notifications toast pour les interactions</li>
              <li>✅ Images optimisées avec chargement progressif</li>
              <li>✅ Design responsive et animations fluides</li>
            </ul>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">
                💡 Besoin d&apos;aide ?
              </h3>
              <p className="text-orange-700">
                Si vous avez des questions ou des suggestions d&apos;amélioration, 
                n&apos;hésitez pas à nous contacter ou à contribuer au projet !
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux recettes
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
