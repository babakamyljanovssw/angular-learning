import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { IngredientFormComponent } from './recipe-form/recipe-form.component';
import { SelectIngredientDialogComponent } from './select-ingredient-dialog/select-ingredient-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipiesComponent,
    IngredientFormComponent,
    SelectIngredientDialogComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
