import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgZone } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { CardComponent } from './components/commons/card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './components/shared/confirm-dialog/confirm-dialog.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CoreLibModule } from '../../../core-lib/projects/core-lib/src/lib/core-lib.module';
import { AuthenticationGuard } from './guards/authentication.guard';

import {
  AuthenticationService,
  RecipeResolver,
  ServiceAsync,
  RecipeService,
  ShoppingListService,
  AuthUserInterceptor,
  SharedPreference
} from 'core-lib';


import {
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatFormField,
  MatFormFieldModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatGridListModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    RecipeStartComponent,
    CardComponent,
    ConfirmDialogComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatGridListModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    CoreLibModule
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  providers: [
    AuthenticationGuard,
    SharedPreference,
    ServiceAsync,
    AuthenticationService,
    RecipeResolver,
    ServiceAsync,
    RecipeService,
    ShoppingListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthUserInterceptor,
      multi: true
    },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
