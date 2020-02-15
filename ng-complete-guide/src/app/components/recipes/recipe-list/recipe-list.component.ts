import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe, RecipeService } from 'core-lib';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[] = [];

  recipesChangedSubscription: Subscription;

  filterByName;

  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.recipes = this.recipeService.getRecipes();

    this.recipesChangedSubscription = this.recipeService.recipesChanged.subscribe((recipeList: Recipe[]) => {
      this.recipes = recipeList;
    });

  }

  onAddRecipeItem() {
    this.router
      .navigate(['new-recipe'], { relativeTo: this.route });
  }


  ngOnDestroy() {
    this.recipesChangedSubscription.unsubscribe();

  }

}
