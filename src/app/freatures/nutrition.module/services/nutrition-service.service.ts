import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Meals } from '../interfaces/IMeals'
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class NutritionService {

   private url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllMeals() {
    return this.httpClient.get<Meals[]>(`${environment.apiUrl}/meals`);
  }
 
  addMeal(meal: Meals) {
    return this.httpClient.post<Meals>(`${this.url}/meals`, meal);
  }

  deleteMeals(ids: number[]): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/meals/multi/${ids}`);
  }

}
