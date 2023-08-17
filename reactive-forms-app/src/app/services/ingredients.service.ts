import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { INGREDIENTS } from '../mock-ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  /** GET ingredients from the server */
  getAllIngredients() {
    return of(INGREDIENTS);
  }
}
