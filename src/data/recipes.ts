import { Recipe } from '@/types/recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Pâtes Carbonara',
    description: 'Un classique italien crémeux et savoureux avec des œufs, du parmesan et des lardons.',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      '400g de spaghettis',
      '200g de lardons',
      '4 œufs entiers',
      '100g de parmesan râpé',
      'Poivre noir fraîchement moulu',
      'Sel'
    ],
    steps: [
      'Faire cuire les pâtes dans une grande casserole d\'eau salée selon les instructions du paquet.',
      'Pendant ce temps, faire revenir les lardons dans une poêle jusqu\'à ce qu\'ils soient dorés.',
      'Dans un bol, battre les œufs avec le parmesan râpé et le poivre.',
      'Égoutter les pâtes en réservant un peu d\'eau de cuisson.',
      'Mélanger immédiatement les pâtes chaudes avec le mélange œufs-parmesan.',
      'Ajouter les lardons et un peu d\'eau de cuisson si nécessaire.',
      'Servir immédiatement avec du parmesan supplémentaire.'
    ],
    cookingTime: 20,
    difficulty: 'Facile',
    servings: 4
  },
  {
    id: '2',
    title: 'Ratatouille Provençale',
    description: 'Un plat traditionnel français aux légumes du soleil, parfait pour l\'été.',
    image: 'https://images.pexels.com/photos/8477552/pexels-photo-8477552.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      '2 aubergines',
      '3 courgettes',
      '4 tomates',
      '2 poivrons rouges',
      '1 oignon',
      '4 gousses d\'ail',
      'Herbes de Provence',
      'Huile d\'olive',
      'Sel et poivre'
    ],
    steps: [
      'Couper tous les légumes en dés de taille similaire.',
      'Faire chauffer l\'huile d\'olive dans une grande poêle.',
      'Faire revenir l\'oignon et l\'ail jusqu\'à ce qu\'ils soient transparents.',
      'Ajouter les aubergines et les poivrons, cuire 10 minutes.',
      'Incorporer les courgettes et les tomates.',
      'Assaisonner avec les herbes de Provence, le sel et le poivre.',
      'Laisser mijoter 30 minutes à feu doux en remuant occasionnellement.',
      'Servir chaud ou tiède.'
    ],
    cookingTime: 45,
    difficulty: 'Facile',
    servings: 6
  },
  {
    id: '3',
    title: 'Tarte Tatin aux Pommes',
    description: 'La célèbre tarte renversée aux pommes caramélisées, un dessert français emblématique.',
    image: 'https://images.pexels.com/photos/7525056/pexels-photo-7525056.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      '1 pâte brisée',
      '8 pommes Golden',
      '150g de sucre',
      '50g de beurre',
      '1 cuillère à soupe de calvados (optionnel)',
      'Une pincée de cannelle'
    ],
    steps: [
      'Préchauffer le four à 200°C.',
      'Éplucher et couper les pommes en quartiers.',
      'Dans un moule à tarte tatin, faire un caramel avec le sucre.',
      'Ajouter le beurre au caramel et mélanger.',
      'Disposer les quartiers de pommes en rosace sur le caramel.',
      'Saupoudrer de cannelle et arroser de calvados si désiré.',
      'Recouvrir de la pâte brisée en rentrant les bords.',
      'Cuire 25-30 minutes jusqu\'à ce que la pâte soit dorée.',
      'Laisser reposer 5 minutes puis démouler en retournant rapidement.'
    ],
    cookingTime: 60,
    difficulty: 'Moyen',
    servings: 8
  },
  {
    id: '4',
    title: 'Coq au Vin',
    description: 'Un plat traditionnel bourguignon mijoté au vin rouge avec des champignons et des lardons.',
    image: 'https://images.pexels.com/photos/8477551/pexels-photo-8477551.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      '1 poulet fermier découpé',
      '75cl de vin rouge de Bourgogne',
      '200g de lardons',
      '300g de champignons de Paris',
      '12 petits oignons grelots',
      '2 carottes',
      '2 gousses d\'ail',
      'Bouquet garni',
      'Beurre et farine',
      'Sel et poivre'
    ],
    steps: [
      'Faire mariner les morceaux de poulet dans le vin rouge pendant 2 heures.',
      'Égoutter le poulet et réserver la marinade.',
      'Faire revenir les lardons puis les réserver.',
      'Faire dorer les morceaux de poulet dans la même poêle.',
      'Ajouter les légumes et faire revenir quelques minutes.',
      'Verser la marinade et ajouter le bouquet garni.',
      'Laisser mijoter 1h30 à feu doux.',
      'Lier la sauce avec un beurre manié (beurre + farine).',
      'Rectifier l\'assaisonnement et servir bien chaud.'
    ],
    cookingTime: 120,
    difficulty: 'Difficile',
    servings: 6
  }
];