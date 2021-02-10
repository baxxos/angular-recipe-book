import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { Ingredient } from 'src/models/ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.updateIngredients();

    this.shoppingListService.listChangeEmitter.subscribe(
      this.updateIngredients
    );
  }

  updateIngredients = () => {
    this.ingredients = this.shoppingListService.getIngredients();
  };
}
