import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[]=[
        new Recipe('A test recipe', 'this is a test', 'https://minimalistbaker.com/wp-content/uploads/2023/01/Green-bean-potato-salad-7-500x750.jpg'),
        new Recipe('Another test recipe', 'this is a test', 'https://minimalistbaker.com/wp-content/uploads/2023/01/Green-bean-potato-salad-7-500x750.jpg')
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}

