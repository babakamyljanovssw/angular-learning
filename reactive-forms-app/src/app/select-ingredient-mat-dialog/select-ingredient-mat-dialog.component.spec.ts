import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIngredientMatDialogComponent } from './select-ingredient-mat-dialog.component';

describe('SelectIngredientDialogComponent', () => {
  let component: SelectIngredientMatDialogComponent;
  let fixture: ComponentFixture<SelectIngredientMatDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectIngredientMatDialogComponent]
    });
    fixture = TestBed.createComponent(SelectIngredientMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
