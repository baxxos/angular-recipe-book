import { Ingredient } from 'src/models/ingredient';

export type Recipe = {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
};
