# 🍳 Livre de Recettes - Site Next.js

Un site web moderne de recettes de cuisine construit avec Next.js 15, TypeScript et Tailwind CSS.

## ✨ Fonctionnalités

- **Page d'accueil** : Grille de cartes de recettes avec recherche intégrée
- **Pages de recettes détaillées** : Ingrédients, étapes et informations nutritionnelles
- **Recherche avancée** : Filtrage par titre, description, catégorie et ingrédients
- **Design responsive** : Interface moderne optimisée pour tous les appareils
- **Navigation intuitive** : Structure claire avec en-tête et pied de page

## 🚀 Installation

1. **Cloner le repository**
   ```bash
   git clone <votre-repository>
   cd Recipe
   ```

2. **Installer les dépendances**
   ```bash
   yarn install
   ```

3. **Lancer le serveur de développement**
   ```bash
   yarn dev
   ```

4. **Ouvrir dans le navigateur**
   Allez sur [http://localhost:3000](http://localhost:3000)

## 📝 Scripts disponibles

- `yarn dev` - Lance le serveur de développement
- `yarn build` - Construit l'application pour la production
- `yarn start` - Lance l'application en mode production
- `yarn lint` - Vérifie et corrige les erreurs de linting

## 🏗️ Structure du projet

```
src/
├── app/                    # Pages App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── about/             # Page À propos
│   │   └── page.tsx
│   └── recipe/[id]/       # Pages dynamiques des recettes
│       └── page.tsx
├── components/            # Composants réutilisables
│   ├── Layout.tsx         # Layout avec Header/Footer
│   ├── RecipeCard.tsx     # Carte de recette
│   ├── SearchBar.tsx      # Barre de recherche
│   ├── IngredientList.tsx # Liste des ingrédients
│   └── StepList.tsx       # Liste des étapes
├── data/                  # Données mockées
│   └── recipes.ts         # Collection de recettes
└── types/                 # Types TypeScript
    └── recipe.ts          # Interfaces des recettes
```

## 🍽️ Ajouter une nouvelle recette

1. **Ouvrez le fichier** `src/data/recipes.ts`

2. **Ajoutez votre recette** dans le tableau `mockRecipes` :

```typescript
{
  id: 'identifiant-unique',
  title: 'Nom de la recette',
  description: 'Description courte et appétissante',
  image: '/images/nom-image.jpg',
  ingredients: [
    'Ingrédient 1',
    'Ingrédient 2',
    // ...
  ],
  steps: [
    'Étape 1 de préparation',
    'Étape 2 de préparation',
    // ...
  ],
  prepTime: 20,        // Temps de préparation en minutes
  cookTime: 30,        // Temps de cuisson en minutes
  servings: 4,         // Nombre de portions
  difficulty: 'facile', // 'facile', 'moyen', 'difficile'
  category: 'Plat principal' // Catégorie du plat
}
```

3. **Ajoutez l'image** dans `public/images/`

4. **Sauvegardez** et rechargez la page !

## 🎨 Technologies utilisées

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique pour une meilleure robustesse
- **Tailwind CSS** - Framework CSS utilitaire pour un design rapide
- **Yarn** - Gestionnaire de paquets rapide et sécurisé

## 🔧 Configuration

### Tailwind CSS
La configuration Tailwind est dans `tailwind.config.js` et `postcss.config.mjs`.

### TypeScript
Configuration TypeScript dans `tsconfig.json`.

### ESLint
Configuration ESLint dans `eslint.config.mjs`.

## 🚀 Déploiement

### Vercel (recommandé)
```bash
yarn build
# Puis déployer sur Vercel
```

### Autres plateformes
```bash
yarn build
yarn start
```

## 🎯 Prochaines fonctionnalités

- [ ] Système de notes et commentaires
- [ ] Sauvegarde des recettes favorites
- [ ] Calcul automatique des portions
- [ ] Timer intégré
- [ ] Partage social
- [ ] Mode sombre
- [ ] Impression des recettes
- [ ] Suggestions de recettes similaires

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité
3. Commitez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- Next.js pour le framework
- Tailwind CSS pour le design
- Vercel pour l'hébergement
- Toute la communauté open source

---

**Bon appétit ! 🍽️**
