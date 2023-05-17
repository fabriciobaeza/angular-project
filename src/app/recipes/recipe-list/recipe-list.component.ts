import { Component, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[]=[
    new Recipe('A test recipe', 'this is a test', 'https://minimalistbaker.com/wp-content/uploads/2023/01/Green-bean-potato-salad-7-500x750.jpg'),
    new Recipe('A test recipe', 'this is a test', 'https://minimalistbaker.com/wp-content/uploads/2023/01/Green-bean-potato-salad-7-500x750.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
