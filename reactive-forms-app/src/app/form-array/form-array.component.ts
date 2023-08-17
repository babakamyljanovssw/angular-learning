import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators, FormControl } from '@angular/forms';

interface RecipeIngredient {
  name: string,
  quantity: string,
  unit: string
}

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
  recipeIngredientsMock: RecipeIngredient[] = [
    {
      name: 'Black Beans',
      quantity: '50',
      unit: 'g'
    },
    {
      name: 'Salt',
      quantity: '10',
      unit: 'g'
    },
    {
      name: 'Milk',
      quantity: '100',
      unit: 'ml'
    },
  ];
  selectIngredientsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.selectIngredientsForm = this.fb.group({
      recipeIngredients: this.fb.array([])
    });
  }
  
  ngOnInit(): void {
    this.updateFormArrayValues();
  }

  // if there is no mock data, just create one formGroup with empty values and push it to the array
  // otherwise, create formGroup with mock values and push it to the FormArray
  updateFormArrayValues() {
    if(this.recipeIngredientsMock.length == 0) {
      this.getRecipeIngredientsArray().push(this.buildFormGroup());
    } else {
      for (let i = 0; i < this.recipeIngredientsMock.length; i++) {
        const item = this.recipeIngredientsMock[i];
        this.getRecipeIngredientsArray().push(this.buildFormGroup(item));
      }
    }
  }

  buildFormGroup(value: RecipeIngredient = {name: "", quantity: "", unit: ""}): FormGroup {
    return this.fb.group({
      name: this.fb.control(value.name, Validators.required),
      quantity: this.fb.control(value.quantity, Validators.required),
      unit: this.fb.control(value.unit, Validators.required),
    });
  }

  /** GET FormArray */
  getRecipeIngredientsArray(): FormArray {
    return this.selectIngredientsForm.get('recipeIngredients') as FormArray;
  }

  /** GET name control of FormArray */
  getNameControl(i: number) {
    const control = this.getRecipeIngredientsArray().controls[i].get('name');
    return control;
  }

  /** GET name control of FormArray */
  getQuantityControl(i: number) {
    const control = this.getRecipeIngredientsArray().controls[i].get('quantity');
    return control;
  }

  /** GET name control of FormArray */
  getUnitControl(i: number) {
    const control = this.getRecipeIngredientsArray().controls[i].get('unit');
    return control;
  }

  // add formGroup to FormArray
  pushToArray() {
    const recipeIngredients = this.getRecipeIngredientsArray();
    recipeIngredients.push(this.buildFormGroup());
  }

  // remove formGroup at given index from FormArray
  removeAt(i: number) {
    const recipeIngredients = this.getRecipeIngredientsArray();
    recipeIngredients.removeAt(i);
  }

  onSubmit() {
    const formData = this.getRecipeIngredientsArray().value;

    const formConrtols = this.getRecipeIngredientsArray().controls;
    console.log(formConrtols[0].get('name')?.value);
    this.recipeIngredientsMock = [];
    for (let index = 0; index < formData.length; index++) {
      this.recipeIngredientsMock.push(formData[index]);
    }
  }
}
