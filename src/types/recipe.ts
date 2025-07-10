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
  rating?: number;
  isVegetarian?: boolean;
  isVegan?: boolean;
  tags?: string[];
}

export interface RecipeCardProps {
  recipe: Recipe;
  onToggleFavorite?: (id: string) => void;
  isFavorite?: boolean;
}

export interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  placeholder?: string;
}

export interface FilterOptions {
  category: string;
  difficulty: string;
  maxTime: number;
  isVegetarian: boolean;
  isVegan: boolean;
}

export interface SortOption {
  value: string;
  label: string;
}

export interface FilterBarProps {
  categories: string[];
  onFilter: (filters: Partial<FilterOptions>) => void;
  onSort: (sortBy: string) => void;
  currentFilters: Partial<FilterOptions>;
}

export interface IngredientListProps {
  ingredients: string[];
}

export interface StepListProps {
  steps: string[];
}

export interface RecipeStatsProps {
  totalRecipes: number;
  filteredRecipes: number;
  categories: string[];
}
