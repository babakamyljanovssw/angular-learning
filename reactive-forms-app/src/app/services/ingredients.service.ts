import { Injectable } from '@angular/core';
import { of, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

enum Environment {
  baseApiUrl = 'https://localhost:7151/api/'
}

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  /** GET ingredients from the server */
  getAllIngredient() {
    var ingredientsUrl = Environment.baseApiUrl + 'Ingredients';

    return this.http.get(ingredientsUrl).pipe(
      catchError(res => of(res))
    );
  }
}
