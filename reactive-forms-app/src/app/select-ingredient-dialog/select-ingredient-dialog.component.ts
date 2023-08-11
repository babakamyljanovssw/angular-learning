import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, startWith, map, Subscription } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-select-ingredient-dialog',
  templateUrl: './select-ingredient-dialog.component.html',
  styleUrls: ['./select-ingredient-dialog.component.css']
})
export class SelectIngredientDialogComponent {
  ingredientsControl = new FormControl<string | Ingredient>('');
  private subscription: Subscription = new Subscription();

  filteredOptions: Observable<Ingredient[]> = of();

  ingredients: Ingredient[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.subscription = data.ingredients$.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
    console.log(this.ingredients);
  }

  ngOnInit() {
    this.filteredOptions = this.ingredientsControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.ingredientName;
        return name ? this._filter(name as string) : this.ingredients.slice()
      }),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  displayFn(ingredient: Ingredient): string {
    return ingredient && ingredient.ingredientName ? ingredient.ingredientName : '';
  }

  private _filter(ingredientName: string): Ingredient[] {
    const filterValue = ingredientName.toLowerCase();
    return this.ingredients.filter(
      ingredient => ingredient.ingredientName.toLowerCase().includes(filterValue)
    );
  }
}
