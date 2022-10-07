import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new Subject<Recipe>();

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

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(newRecipe: Recipe, index: number) {
    this.recipes[index] = newRecipe;
  }
}
