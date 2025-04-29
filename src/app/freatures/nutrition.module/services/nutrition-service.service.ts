import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../interfaces/meals';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  
  private readonly API_URL = 'http://localhost:8080/meals'; 

  constructor(private http: HttpClient) {}

  getRefeicoes(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>(this.API_URL);
  }

  adicionarRefeicao(refeicao: PeriodicElement): Observable<PeriodicElement> {
    return this.http.post<PeriodicElement>(this.API_URL, refeicao);
  }
}
