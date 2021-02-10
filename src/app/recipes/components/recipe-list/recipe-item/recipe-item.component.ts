import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipes/services/recipe.service';
import { Recipe } from 'src/models/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onSelect = () => {
    this.recipeService.selectionEmitter.emit(this.recipe);
  };
}
