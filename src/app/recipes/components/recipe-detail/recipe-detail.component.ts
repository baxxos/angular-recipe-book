import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/recipes/services/recipe.service';
import { Ingredient } from 'src/models/ingredient';
import { Recipe } from 'src/models/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      ({ id }) => (this.recipe = this.recipeService.getRecipe(+id))
    );
  }

  onAddToShoppingList(recipe: Recipe) {
    this.recipeService.addIngredientsToShoppingList(recipe.ingredients);
  }
}
