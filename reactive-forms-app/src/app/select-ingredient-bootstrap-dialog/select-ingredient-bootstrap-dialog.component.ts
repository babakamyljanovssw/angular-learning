import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of, map, Subscription, OperatorFunction, debounceTime } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { IngredientsService } from '../services/ingredients.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-ingredient-bootstrap-dialog',
  templateUrl: './select-ingredient-bootstrap-dialog.component.html',
  styleUrls: ['./select-ingredient-bootstrap-dialog.component.css']
})
export class SelectIngredientBootstrapDialogComponent {
  selectIngredientForm: FormGroup;
  filteredOptions: Observable<Ingredient[]> = of();
  ingredients: Ingredient[] = [];
  private subscription: Subscription = new Subscription();
  
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private ingredientsService: IngredientsService) {
      this.getAllIngredients();
      this.selectIngredientForm = this.fb.group({
      ingredientControl: new FormControl<string | Ingredient>(''),
      unitControl: [{value: "", disabled: true}]
    })
  }

  ngOnInit() {
    this.getAllIngredients();
    this.selectIngredientForm.get('ingredientControl')!.valueChanges.pipe(
      map(value => {
        const name = typeof value === 'string' ? value : value.name;
        const newUnitControlValue = this.getUnit(name);
        this.selectIngredientForm.get('unitControl')?.setValue(newUnitControlValue);
      }),
    ).subscribe();
  }
  
  formatter = (x: {name: string}) => x.name;
  
  search: OperatorFunction<string, readonly { name: string }[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term === '' ? [] : this.ingredients.filter(i => i.name.toLowerCase().includes(term.toLowerCase())))
  );

  getAllIngredients() {
    this.subscription = this.ingredientsService.getAllIngredients().subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  private getUnit(name: string) {
    var unit = this.ingredients.find(ingredient => ingredient.name.toLowerCase() === name.toLowerCase())?.unit;
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
