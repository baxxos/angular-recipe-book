import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/models/ingredient';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  listChangeEmitter = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    { name: 'Apple', amount: 5 },
    { name: 'Lemon', amount: 1 },
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
    this.listChangeEmitter.emit(this.getIngredients());
  };

  addIngredients = (ingredients: Ingredient[]) => {
    this.ingredients.push(...ingredients);
    this.listChangeEmitter.emit(this.getIngredients());
  };

  deleteIngredient = (ingredient: Ingredient) => {
    const targetIndex = this.ingredients.findIndex(
      (el) => el.name === ingredient.name && el.amount === ingredient.amount
    );

    this.ingredients.splice(targetIndex);
    this.listChangeEmitter.emit(this.getIngredients());
  };
}
