import { Ingredient } from 'src/models/ingredient';

export type Recipe = {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];
};
