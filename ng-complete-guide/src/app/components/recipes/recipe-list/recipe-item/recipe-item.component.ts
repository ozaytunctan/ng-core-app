import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe, RecipeService } from 'core-lib';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input("recipe-item") recipe: Recipe;

  @Input('recipe-id') recipeId:number;
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

 
}
