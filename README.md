# 🍳 Livre de Recettes - Site Next.js

Un site web moderne et interactif de recettes de cuisine construit avec Next.js 15, TypeScript et Tailwind CSS. Une application complète avec gestion des favoris, filtres avancés, et une expérience utilisateur optimisée.

## ✨ Fonctionnalités

### 🏠 Page d'accueil
- **Grille de recettes** : Affichage en cartes avec images SVG optimisées
- **Recherche intelligente** : Filtrage par titre, description, catégorie et ingrédients
- **Filtres avancés** : Par catégorie, difficulté, temps de préparation, options alimentaires (végétarien/vegan)
- **Tri dynamique** : Par nom, temps, difficulté, note
- **Statistiques en temps réel** : Nombre de recettes affichées et filtres actifs

### 📱 Interface utilisateur
- **Design responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Animations fluides** : Transitions CSS modernes et interactions intuitives
- **Accessibilité** : Navigation clavier, focus visible, contrastes optimisés
- **Images optimisées** : Chargement progressif avec fallback en cas d'erreur

### ⭐ Fonctionnalités interactives
- **Système de favoris** : Sauvegarde locale des recettes préférées
- **Notifications toast** : Retours visuels pour toutes les actions utilisateur
- **Gestion d'état avancée** : useState et useEffect pour une expérience fluide

### 🍽️ Pages de recettes
- **Pages dynamiques** : URL propres pour chaque recette (/recipe/[id])
- **Informations complètes** : Ingrédients, étapes, temps, portions, difficulté
- **Notes et tags** : Système de notation sur 5 étoiles et étiquettes
- **Options alimentaires** : Indication végétarien/vegan

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
│   ├── RecipeCard.tsx     # Carte de recette avec favoris
│   ├── SearchBar.tsx      # Barre de recherche intelligente
│   ├── FilterBar.tsx      # Filtres avancés et tri
│   ├── RecipeStats.tsx    # Statistiques de recettes
│   ├── IngredientList.tsx # Liste des ingrédients
│   ├── StepList.tsx       # Liste des étapes
│   ├── LoadingSpinner.tsx # Indicateur de chargement
│   ├── Toast.tsx          # Notifications toast
│   └── OptimizedImage.tsx # Images avec fallback
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
  image: '/images/nom-image.svg', // Format SVG recommandé
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
  prepTime: 20,          // Temps de préparation en minutes
  cookTime: 30,          // Temps de cuisson en minutes
  servings: 4,           // Nombre de portions
  difficulty: 'facile',  // 'facile', 'moyen', 'difficile'
  category: 'Plat principal', // Catégorie du plat
  rating: 4.5,           // Note sur 5 étoiles
  tags: ['rapide', 'familial'], // Tags descriptifs
  isVegetarian: false,   // Option végétarienne
  isVegan: false         // Option vegan
}
```

3. **Ajoutez l'image** au format SVG dans `public/images/`

4. **Sauvegardez** et rechargez la page !

## 🎨 Technologies utilisées

- **Next.js 15** - Framework React avec App Router et optimisations modernes
- **TypeScript** - Typage statique pour une meilleure robustesse du code
- **Tailwind CSS** - Framework CSS utilitaire pour un design rapide et cohérent
- **Yarn** - Gestionnaire de paquets rapide et sécurisé
- **ESLint** - Linting pour la qualité du code
- **React Hooks** - useState, useEffect pour la gestion d'état
- **CSS Animations** - Transitions et animations fluides
- **Local Storage** - Sauvegarde locale des favoris

## � Guide d'utilisation

### 🔍 Recherche et filtres
1. **Recherche** : Tapez dans la barre de recherche pour filtrer par nom, ingrédients, ou description
2. **Filtres** : Utilisez les filtres pour affiner par catégorie, difficulté, temps, et options alimentaires
3. **Tri** : Triez les résultats par nom, temps de préparation, difficulté, ou note

### ⭐ Gestion des favoris
1. **Ajouter** : Cliquez sur l'étoile sur une carte de recette
2. **Voir les favoris** : Utilisez le filtre "Favoris uniquement"
3. **Supprimer** : Cliquez à nouveau sur l'étoile pour retirer des favoris

### 📱 Navigation
- **Accueil** : Voir toutes les recettes avec filtres
- **Détail** : Cliquez sur une carte pour voir la recette complète
- **À propos** : Informations sur le site et guide d'utilisation

## �🔧 Configuration

### Tailwind CSS
La configuration Tailwind est dans `tailwind.config.js` et `postcss.config.mjs`.

### TypeScript
Configuration TypeScript dans `tsconfig.json`.

### ESLint
Configuration ESLint dans `eslint.config.mjs`.

## 🚀 Déploiement

### Vercel (recommandé)
```bash
# Build pour la production
yarn build

# Déployer sur Vercel
npx vercel

# Ou utiliser l'interface web Vercel
```

### Autres plateformes
```bash
# Build et démarrage
yarn build
yarn start

# L'application sera disponible sur le port 3000
```

## ⚡ Performances

- **Images optimisées** : Format SVG pour des temps de chargement rapides
- **Code splitting** : Chargement lazy des composants avec Next.js
- **SSG/SSR** : Pages statiques générées à la build
- **CSS optimisé** : Tailwind CSS avec purge automatique
- **TypeScript** : Détection d'erreurs à la compilation

## 🎯 Fonctionnalités disponibles

✅ **Déjà implémentées**
- [x] Système de favoris avec sauvegarde locale
- [x] Filtres avancés (catégorie, difficulté, temps, options alimentaires)
- [x] Tri des recettes par différents critères
- [x] Notifications toast pour les interactions
- [x] Images SVG optimisées avec chargement progressif
- [x] Design responsive avec animations fluides
- [x] Recherche intelligente multi-critères
- [x] Pages dynamiques pour chaque recette
- [x] Statistiques en temps réel
- [x] Interface accessible

## 🚀 Prochaines fonctionnalités

🔮 **À venir**
- [ ] Système de notes et commentaires utilisateurs
- [ ] Calcul automatique des portions avec conversion
- [ ] Timer intégré pour les étapes de cuisson
- [ ] Partage social des recettes
- [ ] Mode sombre / clair
- [ ] Suggestions de recettes similaires
- [ ] Export/impression des recettes
- [ ] Base de données persistante (Firebase/Supabase)
- [ ] Upload d'images utilisateur
- [ ] Système d'authentification
- [ ] Création de recettes par les utilisateurs

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

- **Next.js** - Pour le framework React moderne et performant
- **Tailwind CSS** - Pour le système de design utilitaire
- **TypeScript** - Pour la sécurité des types
- **Vercel** - Pour l'hébergement et le déploiement
- **React** - Pour la bibliothèque UI
- **Yarn** - Pour la gestion des dépendances
- **Toute la communauté open source** - Pour les outils et ressources

## 📈 Statistiques du projet

- **6 recettes** de démonstration incluses
- **10+ composants** React réutilisables
- **15+ filtres** et options de tri
- **100% responsive** sur tous les appareils
- **TypeScript strict** pour la qualité du code
- **0 dépendances** externes pour les fonctionnalités principales

---

**Bon appétit ! 🍽️**
