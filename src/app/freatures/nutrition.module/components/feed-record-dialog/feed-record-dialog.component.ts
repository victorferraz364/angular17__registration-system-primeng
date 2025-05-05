import { Component, EventEmitter, Output } from '@angular/core';
import { Meals } from '../../interfaces/IMeals';
import { NutritionService } from '../../services/nutrition-service.service';


@Component({
  selector: 'feed-record-dialog',
  templateUrl: './feed-record-dialog.component.html',
  styleUrl: './feed-record-dialog.component.scss'
})
export class FeedRecordDialogComponent {

  constructor(private nutritionService: NutritionService) {}

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  @Output() newMeal = new EventEmitter<any>();

  refeicao: Meals = {
    food: '',
    quantity: 0,
    calories: 0,
    registrationDate: new Date()
  };

  salvarRefeicao() {
    this.nutritionService.addMeal(this.refeicao).subscribe({
      next: (novaRefeicaoDaAPI) => {
        this.newMeal.emit(novaRefeicaoDaAPI); 
        this.refeicao = {
          food: '',
          quantity: 0,
          calories: 0,
          registrationDate: new Date()
        };
      },
      error: (err) => {
        console.error('Erro ao salvar refeição:', err);
      }
    });
  }
}
