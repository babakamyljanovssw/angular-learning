import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, startWith, map } from 'rxjs';
export interface Ingredient {
  name: string;
}

@Component({
  selector: 'app-select-ingredient-dialog',
  templateUrl: './select-ingredient-dialog.component.html',
  styleUrls: ['./select-ingredient-dialog.component.css']
})
export class SelectIngredientDialogComponent {
  ingredientsControl = new FormControl<string | Ingredient>('');
  options: Ingredient[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<Ingredient[]> = of();

  ngOnInit() {
    this.filteredOptions = this.ingredientsControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(ingredient: Ingredient): string {
    return ingredient && ingredient.name ? ingredient.name : '';
  }

  private _filter(name: string): Ingredient[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
