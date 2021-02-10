import { Recipe } from 'src/models/recipe';
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { Ingredient } from 'src/models/ingredient';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  selectionEmitter = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    {
      name: 'Chicken Broth',
      description: 'A chicken broth',
      ingredients: [
        { name: 'Chicken scraps', amount: 1 },
        { name: 'Carrot', amount: 2 },
      ],
      imagePath:
        'https://www.recipetineats.com/wp-content/uploads/2017/05/Chicken-Noodle-Soup-from-scratch_3.jpg?resize=650,910',
    },
    {
      name: 'Borstch',
      description: 'A russian delicacy',
      ingredients: [
        { name: 'Potatoes', amount: 5 },
        { name: 'Tomatoes', amount: 3 },
      ],
      imagePath: 'https://www.delonghi.com/Global/recipes/multifry/512.jpg',
    },
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes = () => {
    return [...this.recipes];
  };

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
