import { Component, Input } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Meals } from '../../../freatures/nutrition.module/interfaces/IMeals';

@Component({
  selector: 'delete-button',
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss',
  providers: []
})
export class DeleteButtonComponent {

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  @Input({ required: true }) selectedMeals: Meals[] = [];

  isDisabled(): boolean {
    return this.selectedMeals.length === 0;
  }


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
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }
}
