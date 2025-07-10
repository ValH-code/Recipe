export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'facile' | 'moyen' | 'difficile';
  category: string;
}

export interface RecipeCardProps {
  recipe: Recipe;
}

export interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

export interface IngredientListProps {
  ingredients: string[];
}

export interface StepListProps {
  steps: string[];
}
