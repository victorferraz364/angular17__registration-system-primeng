import { Component, OnInit, ViewChild } from '@angular/core';
import { ELEMENTDATA } from './constants/ELEMENT-DATA';
import { Meals } from './interfaces/IMeals';
import { environment } from '../../../environments/environment';
import { NutritionService } from './services/nutrition-service.service';

@Component({
  selector: 'nutrition-page',
  templateUrl: './nutrition.page.component.html',
  styleUrls: ['./nutrition.page.component.scss']
})
export class NutritionPageComponent {
  dadosTabela: Meals[] = [];

  constructor(private nutritionService: NutritionService) {}

  ngOnInit() {
    this.getMeals();
  }

  getMeals() {
    this.nutritionService.getAllMeals().subscribe({
      next: meals => {
        this.dadosTabela = meals;
        console.log('Dados recebidos da API:', meals);
      },
      error: err => {
        console.error('Erro ao carregar os dados:', err);
      }
    });
  }

  adicionarRefeicaoNaTabela(refeicao: Meals) {
    this.dadosTabela = [...this.dadosTabela, refeicao];
  }
}