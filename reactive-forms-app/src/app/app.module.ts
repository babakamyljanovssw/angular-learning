import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { AppMaterialModule } from './app-material/app-material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { IngredientFormComponent } from './recipe-form/recipe-form.component';
import { SelectIngredientMatDialogComponent } from './select-ingredient-mat-dialog/select-ingredient-mat-dialog.component';
import { SelectIngredientBootstrapDialogComponent } from './select-ingredient-bootstrap-dialog/select-ingredient-bootstrap-dialog.component';
import { FormArrayComponent } from './form-array/form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngredientFormComponent,
    SelectIngredientMatDialogComponent,
    SelectIngredientBootstrapDialogComponent,
    FormArrayComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbTypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
