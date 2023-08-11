import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SelectIngredientDialogComponent } from '../select-ingredient-dialog/select-ingredient-dialog.component';
import { Observable, of } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { IngredientsService } from '../services/ingredients.service';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class IngredientFormComponent {
  addMode: boolean = true;
  ingredients$:Observable<Ingredient[]> = of();

  ingredientForm = this.fb.group({
    ingredientPicture: [''],
    ingredientName: [''],
    kilojoulesPerUnit: [0],
    unitOfMeasurement: ['']
  });

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private ingredientsService: IngredientsService
  ) {}

  ngOnInit() {
    this.getAllIngredients();
  }

  getAllIngredients() {
    this.ingredients$ = this.ingredientsService.getAllIngredient();
    console.log(this.ingredients$);
  }

  onSubmit() {}

  openDialog() {
    const dialogRef = this.dialog.open(SelectIngredientDialogComponent, {
      data: { ingredients$: this.ingredients$ }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
