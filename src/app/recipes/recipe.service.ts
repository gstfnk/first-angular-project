import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti',
      'Spaghetti Desc',
      'https://cdn-icons-png.flaticon.com/512/4465/4465494.png',
      [
        new Ingredient('Tomatoes', 3),
        new Ingredient('Meat', 2)
      ]),
    new Recipe(
      'Hamburger',
      'Hamburger Desc',
      'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Pickles', 2)
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
