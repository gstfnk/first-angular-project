import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 3),
    new Ingredient('Basil', 1)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newItem: Ingredient) {
    this.ingredients[index] = newItem;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
