import { Component, OnInit, ViewChild } from '@angular/core';
import { ELEMENTDATA } from './constants/ELEMENT-DATA';
import { PeriodicElement } from './interfaces/periodic-elements.interface';

@Component({
  selector: 'nutrition-page',
  templateUrl: './nutrition.page.component.html',
  styleUrls: ['./nutrition.page.component.scss']
})
export class NutritionPageComponent implements OnInit {
  dadosTabela: PeriodicElement[] = [];

  ngOnInit() {
    this.dadosTabela = [...ELEMENTDATA]; 
  }

  adicionarRefeicaoNaTabela(refeicao: PeriodicElement) {
    this.dadosTabela = [...this.dadosTabela, refeicao];
  }


}