import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SelectIngredientDialogComponent } from '../select-ingredient-dialog/select-ingredient-dialog.component';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class IngredientFormComponent {
  addMode: boolean = true;

  ingredientForm = this.fb.group({
    ingredientPicture: [''],
    ingredientName: [''],
    kilojoulesPerUnit: [0],
    unitOfMeasurement: ['']
  });

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}

  onSubmit() {}

  openDialog() {
    const dialogRef = this.dialog.open(SelectIngredientDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
