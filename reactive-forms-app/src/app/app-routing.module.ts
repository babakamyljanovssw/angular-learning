import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientFormComponent } from './recipe-form/recipe-form.component';
import { FormArrayComponent } from './form-array/form-array.component';

const routes: Routes = [
  { path: 'add', component: IngredientFormComponent },
  { path: 'formarray', component: FormArrayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
