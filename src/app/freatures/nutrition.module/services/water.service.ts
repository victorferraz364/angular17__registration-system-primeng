import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Water } from'../interfaces/IWater'

@Injectable({
  providedIn: 'root'
})
export class WaterService {

   private url = environment.apiUrl;
  
    constructor(private httpClient: HttpClient) { }

     getAllWaterRegister() {
        return this.httpClient.get<Water[]>(`${environment.apiUrl}/water`);
      }
}
