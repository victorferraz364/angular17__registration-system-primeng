import { Component, OnInit, ViewChild } from '@angular/core';
import { ELEMENTDATA } from './constants/ELEMENT-DATA';
import { Meals } from './interfaces/meals';

@Component({
  selector: 'nutrition-page',
  templateUrl: './nutrition.page.component.html',
  styleUrls: ['./nutrition.page.component.scss']
})
export class NutritionPageComponent implements OnInit {
  dadosTabela: Meals[] = [];

  ngOnInit() {
    this.dadosTabela = [...ELEMENTDATA]; 
  }

  adicionarRefeicaoNaTabela(refeicao: Meals) {
    this.dadosTabela = [...this.dadosTabela, refeicao];
  }


}