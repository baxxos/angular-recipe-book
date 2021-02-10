import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipes/services/recipe.service';
import { Recipe } from 'src/models/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.selectionEmitter.subscribe(this.selectRecipe);
  }

  selectRecipe = (recipe: Recipe) => {
    this.selectedRecipe = recipe;
  };
}
