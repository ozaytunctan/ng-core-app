import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'core-lib';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {


  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    
  }

}
