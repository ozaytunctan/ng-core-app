
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient, ShoppingListService, Recipe, RecipeService } from 'core-lib';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {


    ingredients: Ingredient[] = [];

    igChangeSub: Subscription;

    displayedColumns: string[] = ['id', 'name', 'description', 'imagePath','process'];

    dataSource: MatTableDataSource<Recipe>=new MatTableDataSource<Recipe>([]);

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    @ViewChild(MatSort, {static: true}) sort: MatSort;

    filterByName: any;

    data:Recipe []=[];


    constructor(private shoppingListService: ShoppingListService, private recipeService: RecipeService) {
    }

    ngOnInit() {
       this.data= this.recipeService.getRecipes();
        this.dataSource = new MatTableDataSource<Recipe>(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort=this.sort;


        this.ingredients = this.shoppingListService.getIngredients();

        this.igChangeSub = this.shoppingListService.ingredientChanged.subscribe(
            (recivedIngredients: Ingredient[]) => {
                this.ingredients = recivedIngredients;
            });

    }

    onEditItem(id: number) {
        this.shoppingListService.nextEditIgredient(id);
    }

    ngOnDestroy(): void {
        this.igChangeSub.unsubscribe();
    }

    public applyFilter(filterStr:any,propName:any) {
        if (filterStr == undefined || filterStr == '') {
            this.dataSource.data=this.data;
            return;
        }
      this.dataSource.data=  this.dataSource.data.filter(item=>item[propName].toLowerCase().indexOf(filterStr.toLowerCase()) >= 0);

    }
}
