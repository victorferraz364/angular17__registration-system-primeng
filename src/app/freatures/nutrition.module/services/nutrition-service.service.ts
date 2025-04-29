import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Meals } from '../interfaces/IMeals'



@Injectable({
  providedIn: 'root'
})
export class NutritionService {



   private url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllMeals() {
    return this.httpClient.get<Meals[]>(`${environment.apiUrl}/meals`);
  }
 
}
