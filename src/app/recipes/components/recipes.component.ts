import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipes/services/recipe.service';
import { Recipe } from 'src/models/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}
}
