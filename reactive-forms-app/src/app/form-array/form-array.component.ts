import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

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
  recipeIngredients: RecipeIngredient[] = [];
  selectIngredientsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.selectIngredientsForm = this.fb.group({
      recipeIngredients: this.fb.array([
        this.buildFormGroup() 
      ])
    });
  }
  
  buildFormGroup(): FormGroup {
    return this.fb.group({
      name: this.fb.control(''),
      quantity: this.fb.control(''),
      unit: this.fb.control(''),
    });
  }

  getRecipeIngredientsArray(): FormArray {
    return this.selectIngredientsForm.get('recipeIngredients') as FormArray;
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
    this.recipeIngredients = [];
    for (let index = 0; index < formData.length; index++) {
      this.recipeIngredients.push(formData[index]);
    }
    console.log(this.recipeIngredients);
  }
}
