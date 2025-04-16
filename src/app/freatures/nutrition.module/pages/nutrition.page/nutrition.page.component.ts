import { Component } from '@angular/core';
import { ELEMENTDATA } from './constants/ELEMENT-DATA';

@Component({
  selector: 'nutrition-page',
  templateUrl: './nutrition.page.component.html',
  styleUrls: ['./nutrition.page.component.scss']
})
export class NutritionPageComponent {

  colunas = [
    { field: 'alimento', header: 'Alimento' },
    { field: 'calorias', header: 'Kcal' },
    { field: 'datahora', header: 'Hora' }
  ];

  dados: any[] = [];

  ngOnInit() {
    this.dados = ELEMENTDATA;
  }
}
