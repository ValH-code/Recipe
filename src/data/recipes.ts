import { Recipe } from '@/types/recipe';

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Spaghetti Bolognaise',
    description: 'Un classique de la cuisine italienne avec une sauce riche et savoureuse.',
    image: '/images/spaghetti-bolognaise.jpg',
    ingredients: [
      '400g de spaghetti',
      '300g de bœuf haché',
      '1 oignon',
      '2 carottes',
      '2 branches de céleri',
      '400g de tomates concassées',
      '2 gousses d\'ail',
      '1 verre de vin rouge',
      'Huile d\'olive',
      'Sel et poivre'
    ],
    steps: [
      'Faire revenir l\'oignon, les carottes et le céleri dans l\'huile d\'olive.',
      'Ajouter l\'ail et la viande hachée, faire dorer.',
      'Verser le vin rouge et laisser réduire.',
      'Ajouter les tomates concassées, saler et poivrer.',
      'Laisser mijoter 1h30.',
      'Cuire les spaghetti selon les instructions.',
      'Servir avec la sauce et du parmesan râpé.'
    ],
    prepTime: 20,
    cookTime: 120,
    servings: 4,
    difficulty: 'moyen',
    category: 'Plat principal'
  },
  {
    id: '2',
    title: 'Tarte aux Pommes',
    description: 'Une délicieuse tarte aux pommes traditionnelle française.',
    image: '/images/tarte-aux-pommes.jpg',
    ingredients: [
      '1 pâte brisée',
      '4 pommes',
      '50g de beurre',
      '80g de sucre',
      '2 œufs',
      '200ml de crème fraîche',
      '1 c. à soupe de cannelle',
      '1 c. à soupe de vanille'
    ],
    steps: [
      'Préchauffer le four à 180°C.',
      'Étaler la pâte dans un moule à tarte.',
      'Éplucher et couper les pommes en lamelles.',
      'Disposer les pommes sur la pâte.',
      'Mélanger les œufs, la crème, le sucre, la cannelle et la vanille.',
      'Verser le mélange sur les pommes.',
      'Cuire 40 minutes jusqu\'à ce que le dessus soit doré.'
    ],
    prepTime: 30,
    cookTime: 40,
    servings: 6,
    difficulty: 'facile',
    category: 'Dessert'
  },
  {
    id: '3',
    title: 'Coq au Vin',
    description: 'Un plat traditionnel français mijoté dans le vin rouge.',
    image: '/images/coq-au-vin.jpg',
    ingredients: [
      '1 coq ou poulet découpé',
      '200g de lardons',
      '1 bouteille de vin rouge',
      '200g de champignons',
      '12 petits oignons',
      '2 gousses d\'ail',
      '1 bouquet garni',
      '2 c. à soupe de farine',
      'Beurre',
      'Sel et poivre'
    ],
    steps: [
      'Faire revenir les lardons dans une cocotte.',
      'Faire dorer les morceaux de coq avec les lardons.',
      'Saupoudrer de farine et remuer.',
      'Verser le vin rouge et ajouter le bouquet garni.',
      'Ajouter les oignons et l\'ail.',
      'Laisser mijoter 1h30.',
      'Ajouter les champignons 20 minutes avant la fin.',
      'Servir avec des pommes de terre sautées.'
    ],
    prepTime: 30,
    cookTime: 110,
    servings: 4,
    difficulty: 'difficile',
    category: 'Plat principal'
  },
  {
    id: '4',
    title: 'Salade César',
    description: 'Une salade fraîche et croquante avec sa sauce emblématique.',
    image: '/images/salade-cesar.jpg',
    ingredients: [
      '1 salade romaine',
      '100g de parmesan',
      '100g de croûtons',
      '2 filets d\'anchois',
      '1 jaune d\'œuf',
      '2 gousses d\'ail',
      '1 citron',
      '4 c. à soupe d\'huile d\'olive',
      '1 c. à soupe de moutarde',
      'Poivre'
    ],
    steps: [
      'Laver et couper la salade romaine.',
      'Préparer les croûtons en faisant griller le pain.',
      'Écraser l\'ail et les anchois ensemble.',
      'Mélanger le jaune d\'œuf avec la moutarde.',
      'Ajouter l\'huile d\'olive en filet.',
      'Incorporer l\'ail, les anchois et le jus de citron.',
      'Mélanger la salade avec la sauce.',
      'Ajouter le parmesan râpé et les croûtons.'
    ],
    prepTime: 20,
    cookTime: 0,
    servings: 2,
    difficulty: 'facile',
    category: 'Entrée'
  },
  {
    id: '5',
    title: 'Crème Brûlée',
    description: 'Le dessert français par excellence avec sa croûte caramélisée.',
    image: '/images/creme-brulee.jpg',
    ingredients: [
      '500ml de crème fraîche',
      '6 jaunes d\'œufs',
      '80g de sucre',
      '1 gousse de vanille',
      '50g de cassonade'
    ],
    steps: [
      'Préchauffer le four à 150°C.',
      'Faire chauffer la crème avec la vanille.',
      'Battre les jaunes d\'œufs avec le sucre.',
      'Verser la crème chaude sur les œufs en mélangeant.',
      'Répartir dans des ramequins.',
      'Cuire au bain-marie 45 minutes.',
      'Laisser refroidir puis réfrigérer 4h.',
      'Saupoudrer de cassonade et caraméliser au chalumeau.'
    ],
    prepTime: 20,
    cookTime: 45,
    servings: 4,
    difficulty: 'moyen',
    category: 'Dessert'
  },
  {
    id: '6',
    title: 'Quiche Lorraine',
    description: 'La quiche traditionnelle de Lorraine avec des lardons.',
    image: '/images/quiche-lorraine.jpg',
    ingredients: [
      '1 pâte brisée',
      '200g de lardons',
      '200ml de crème fraîche',
      '200ml de lait',
      '4 œufs',
      '100g de gruyère râpé',
      'Noix de muscade',
      'Sel et poivre'
    ],
    steps: [
      'Préchauffer le four à 200°C.',
      'Étaler la pâte dans un moule à tarte.',
      'Faire revenir les lardons sans matière grasse.',
      'Battre les œufs avec la crème et le lait.',
      'Ajouter le gruyère, la muscade, sel et poivre.',
      'Disposer les lardons sur la pâte.',
      'Verser l\'appareil à œufs.',
      'Cuire 35 minutes jusqu\'à ce que le dessus soit doré.'
    ],
    prepTime: 20,
    cookTime: 35,
    servings: 6,
    difficulty: 'facile',
    category: 'Plat principal'
  }
];
