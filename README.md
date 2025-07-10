# 🍳 Mes Recettes - Site de Recettes de Cuisine

Un site web moderne développé avec Next.js et TypeScript pour découvrir et partager de délicieuses recettes de cuisine française.

## ✨ Fonctionnalités

- **Page d'accueil** : Grille de cartes de recettes avec images et informations essentielles
- **Recherche avancée** : Filtrage par nom, description ou ingrédients
- **Pages de recettes détaillées** : Ingrédients, étapes de préparation et conseils
- **Design responsive** : Optimisé pour tous les appareils
- **Interface moderne** : Utilisation de Tailwind CSS pour un design élégant

## 🚀 Installation et lancement

### Prérequis
- Node.js (version 18 ou supérieure)
- Yarn

### Installation
```bash
# Cloner le projet
git clone <url-du-repo>
cd mes-recettes

# Installer les dépendances
yarn install
```

### Développement
```bash
# Lancer le serveur de développement
yarn dev
```
Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Production
```bash
# Construire l'application pour la production
yarn build

# Lancer l'application en mode production
yarn start
```

## 📁 Structure du projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── about/page.tsx     # Page à propos
│   ├── recipe/[id]/page.tsx # Pages dynamiques des recettes
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Styles globaux
├── components/            # Composants réutilisables
│   ├── Layout.tsx         # Layout avec header et footer
│   ├── RecipeCard.tsx     # Carte de recette
│   ├── IngredientList.tsx # Liste des ingrédients
│   ├── StepList.tsx       # Liste des étapes
│   └── SearchBar.tsx      # Barre de recherche
├── data/
│   └── recipes.ts         # Données des recettes (mockées)
└── types/
    └── recipe.ts          # Types TypeScript
```

## 🍽️ Ajouter de nouvelles recettes

### 1. Modifier le fichier des données
Ouvrez `src/data/recipes.ts` et ajoutez votre recette à l'array `recipes`.

### 2. Structure d'une recette
```typescript
{
  id: 'identifiant-unique',           // String unique
  title: 'Nom de la recette',         // String
  description: 'Description courte',   // String
  image: 'URL de l\'image',           // String (URL)
  ingredients: [                      // Array de strings
    'ingrédient 1',
    'ingrédient 2'
  ],
  steps: [                           // Array de strings
    'étape 1',
    'étape 2'
  ],
  cookingTime: 30,                   // Number (minutes)
  difficulty: 'Facile',              // 'Facile' | 'Moyen' | 'Difficile'
  servings: 4                        // Number (personnes)
}
```

### 3. Conseils pour les images
- Utilisez des images de haute qualité depuis Pexels ou Unsplash
- Format recommandé : 800x600px minimum
- Assurez-vous que l'URL est accessible publiquement

### 4. Exemple complet
```typescript
{
  id: 'ma-nouvelle-recette',
  title: 'Quiche Lorraine',
  description: 'Une quiche traditionnelle avec des lardons et de la crème fraîche.',
  image: 'https://images.pexels.com/photos/example.jpg',
  ingredients: [
    '1 pâte brisée',
    '200g de lardons',
    '3 œufs',
    '200ml de crème fraîche',
    '100g de gruyère râpé'
  ],
  steps: [
    'Préchauffer le four à 180°C.',
    'Étaler la pâte dans un moule à tarte.',
    'Faire revenir les lardons dans une poêle.',
    'Battre les œufs avec la crème fraîche.',
    'Répartir les lardons sur la pâte.',
    'Verser le mélange œufs-crème et parsemer de gruyère.',
    'Cuire 30 minutes jusqu\'à ce que la surface soit dorée.'
  ],
  cookingTime: 45,
  difficulty: 'Facile',
  servings: 6
}
```

## 🛠️ Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **React Hooks** - Gestion d'état (useState, useEffect)
- **Yarn** - Gestionnaire de paquets

## 📱 Fonctionnalités techniques

- **Rendu statique** : Génération des pages de recettes au build
- **Recherche côté client** : Filtrage en temps réel sans rechargement
- **Design responsive** : Adaptation automatique à tous les écrans
- **Navigation fluide** : Transitions et animations CSS
- **SEO optimisé** : Métadonnées et structure sémantique

## 🎨 Personnalisation

### Couleurs
Les couleurs peuvent être modifiées dans `tailwind.config.ts` :
```typescript
colors: {
  primary: {
    // Vos couleurs personnalisées
  }
}
```

### Styles
Les styles globaux sont dans `src/app/globals.css`.

## 📄 Scripts disponibles

- `yarn dev` - Lancement en mode développement
- `yarn build` - Construction pour la production
- `yarn start` - Lancement en mode production
- `yarn lint` - Vérification du code avec ESLint

## 🤝 Contribution

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Bon appétit et bonne cuisine ! 👨‍🍳**