import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { RecipesComponent } from './recipes/components/recipes.component';
import { RecipeListComponent } from './recipes/components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/components/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/components/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/components/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { RecipePlaceholderComponent } from './recipes/components/recipe-placeholder/recipe-placeholder.component';
import { RecipeEditComponent } from './recipes/components/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    RecipePlaceholderComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
