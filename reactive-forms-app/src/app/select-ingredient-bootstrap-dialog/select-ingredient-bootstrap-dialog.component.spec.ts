import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIngredientBootstrapDialogComponent } from './select-ingredient-bootstrap-dialog.component';

describe('SelectIngredientBootstrapDialogComponent', () => {
  let component: SelectIngredientBootstrapDialogComponent;
  let fixture: ComponentFixture<SelectIngredientBootstrapDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectIngredientBootstrapDialogComponent]
    });
    fixture = TestBed.createComponent(SelectIngredientBootstrapDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
