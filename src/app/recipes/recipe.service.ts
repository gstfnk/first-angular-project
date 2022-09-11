import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Desc',
      'https://cdn-icons-png.flaticon.com/512/4465/4465494.png')
  ];


  getRecipes() {
    return this.recipes.slice();
  }
}
