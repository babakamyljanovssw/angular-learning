import { Component, Inject } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of, startWith, map, Subscription } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-select-ingredient-dialog',
  templateUrl: './select-ingredient-mat-dialog.component.html',
  styleUrls: ['./select-ingredient-mat-dialog.component.css']
})
export class SelectIngredientMatDialogComponent {
  selectIngredientForm: FormGroup;
  filteredOptions: Observable<Ingredient[]> = of();
  ingredients: Ingredient[] = [];
  private subscription: Subscription = new Subscription();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
    this.subscription = data.ingredients$.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });

    this.selectIngredientForm = this.fb.group({
      ingredientControl: new FormControl<string | Ingredient>(''),
      unitControl: [{value: "", disabled: true}]
    })
  }

  ngOnInit() {
    this.filteredOptions = this.selectIngredientForm.get('ingredientControl')!.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        const newUnitControlValue = this.getUnit(name);
        this.selectIngredientForm.get('unitControl')?.setValue(newUnitControlValue);
        return name ? this._filter(name as string) : this.ingredients.slice();
      }),
    );
  }

  displayFn(ingredient: Ingredient): string {
    return ingredient && ingredient.name ? ingredient.name : '';
  }

  private _filter(ingredientName: string): Ingredient[] {
    const filterValue = ingredientName.toLowerCase();
    return this.ingredients.filter(
      ingredient => ingredient.name.toLowerCase().includes(filterValue)
    );
  }

  private getUnit(name: string) {
    var unit = this.ingredients.find(ingredient => ingredient.name === name)?.unit;

    if(unit !== undefined) {
      return unit;
    } else {
      return "";
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
