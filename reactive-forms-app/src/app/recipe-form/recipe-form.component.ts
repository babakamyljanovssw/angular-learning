import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Ingredient } from '../models/ingredient';
import { IngredientsService } from '../services/ingredients.service';
import { SelectIngredientMatDialogComponent } from '../select-ingredient-mat-dialog/select-ingredient-mat-dialog.component';
import { SelectIngredientBootstrapDialogComponent } from '../select-ingredient-bootstrap-dialog/select-ingredient-bootstrap-dialog.component';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
})
export class IngredientFormComponent {
  addMode: boolean = true;
  ingredients$: Observable<Ingredient[]> = of();
  ingredientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private ngbModalService: NgbModal,
    private ingredientsService: IngredientsService
  ) {
    this.ingredientForm = this.fb.group({
      ingredientPicture: [''],
      ingredientName: [''],
      kilojoulesPerUnit: [0],
      unitOfMeasurement: ['']
    });
  }

  ngOnInit() {
    this.getAllIngredients();
  }

  getAllIngredients() {
    this.ingredients$ = this.ingredientsService.getAllIngredients();
  }

  onSubmit() {}

  openDialog() {
    this.ngbModalService.open(SelectIngredientBootstrapDialogComponent, {
      centered: true,
      size: 'lg'
    });

    // const dialogRef = this.dialog.open(SelectIngredientMatDialogComponent, {
    //   data: { ingredients$: this.ingredients$ }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
