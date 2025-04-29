import { Component, EventEmitter, Output } from '@angular/core';
import { Meals } from '../../interfaces/IMeals';


@Component({
  selector: 'feed-record-dialog',
  templateUrl: './feed-record-dialog.component.html',
  styleUrl: './feed-record-dialog.component.scss'
})
export class FeedRecordDialogComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  @Output() novaRefeicao = new EventEmitter<any>();

  alimento: string = '';
  calorias: number = 0;
  horario: Date | null = null;

  adicionarRefeicao() {

    if (this.alimento && this.calorias && this.horario) {
      
      const novaRefeicao = {
        alimento: this.alimento,
        quantidade: 1, 
        calorias: this.calorias,
        datahora: this.horario
      };

    this.novaRefeicao.emit(novaRefeicao); 
  }
}
}
