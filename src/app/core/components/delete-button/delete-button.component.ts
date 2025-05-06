import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Meals } from '../../../freatures/nutrition.module/interfaces/IMeals';
import { NutritionService } from '../../../freatures/nutrition.module/services/nutrition-service.service';

@Component({
  selector: 'delete-button',
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss',
  providers: []
})
export class DeleteButtonComponent {

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    
  ) { }

  @Input({ required: true }) selectedMeals: Meals[] = [];

  isDisabled(): boolean {
    return this.selectedMeals.length === 0;
  }

  @Output() onDelete = new EventEmitter<number[]>();


  // PRIMENG
  confirm2(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text",
      rejectButtonStyleClass: "p-button-text p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",

      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        const ids = this.selectedMeals
          .map(meal => meal.id)
          .filter((id): id is number => id !== undefined);
          alert(ids)

        this.onDelete.emit(ids);
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }
}
