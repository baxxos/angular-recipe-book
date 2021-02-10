import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipes/services/recipe.service';
import { Ingredient } from 'src/models/ingredient';
import { Recipe } from 'src/models/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onAddToShoppingList(recipe: Recipe) {
    this.recipeService.addIngredientsToShoppingList(recipe.ingredients);
  }
}
