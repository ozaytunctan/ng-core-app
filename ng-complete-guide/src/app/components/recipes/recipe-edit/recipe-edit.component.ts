import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, FormArray} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription, from} from 'rxjs';
import {CustomValidators} from 'src/app/validators/custom.validators';
import {MatDialogRef, MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import { Recipe, RecipeService } from 'core-lib';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  id: number;
  editRecipeForm: FormGroup;
  editMode: boolean = false;
  recipe: Recipe;
  recipeRouteSubscription: Subscription;
  matDialogRef: MatDialogRef<ConfirmDialogComponent>;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private dialog: MatDialog
  ) {
  }

  openConfirmDialog() {
    var message = 'Yemek Tarifini güncelemek istediğinize eminmisiniz.';
    this.matDialogRef = this.dialog.open(ConfirmDialogComponent, {data: message, hasBackdrop: true});
  }

  ngOnInit() {
    this.initForm();
    this.recipeRouteSubscription = this.route
      .params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = true;
        this.recipe = this.recipeService.getRecipe(this.id);
        this.initForm();
      });
  }

  initForm() {
    var recipeName = '',
      recipeImagePath = '',
      recipeDescription = '',
      recipeIngredients = new FormArray([]);

    if (this.editMode && this.id >= 0) {
      recipeName = this.recipe.name;
      recipeImagePath = this.recipe.imagePath;
      recipeDescription = this.recipe.description;
      if (this.recipe.ingredients) {
        for (let igr of this.recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(igr.name, [Validators.required]),
              'amount': new FormControl(igr.amount, [Validators.required, Validators.pattern('^[0-9]+[0-9]*$')])
            }));
        }
      }
    }

    this.editRecipeForm = this.fb.group({
      'name': new FormControl(recipeName, [Validators.required, CustomValidators.existsRecipeNameValid]),
      'description': new FormControl(recipeDescription),
      'imagePath': new FormControl(recipeImagePath),
      'ingredients': recipeIngredients
    });

  }

  getControls() {
    return (<FormArray> this.editRecipeForm.get('ingredients')).controls;
  }

  onSubmit() {
    this.loading=true;
    this.openConfirmDialog();
    this.matDialogRef.afterClosed().subscribe(result => {
      if (result) {
        var recipeValue = this.editRecipeForm.value;
        var newRecipe = new Recipe(
          recipeValue.name,
          recipeValue.description,
          recipeValue.imagePath,
          recipeValue.ingredients
        );
        if (this.editMode && this.id >= 0) {
          //updated
          this.recipeService.updateRecipe(this.id, newRecipe);
        } else {
          //insert
          this.recipeService.addRecipe(newRecipe);
        }
        this.onCancel();
      }
      this.loading=false;
    });
  }

  ngOnDestroy(): void {
    this.recipeRouteSubscription.unsubscribe();
  }

  onAddIngredients() {
    (<FormArray> this.editRecipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl('', Validators.required),
        'amount': new FormControl('', [Validators.required, Validators.pattern('^[0-9]+[0-9]*$')])
      })
    );
  }

  onIngredientDelete(id: number) {
    (<FormArray> this.editRecipeForm.get('ingredients')).removeAt(id);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }


}
