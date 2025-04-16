import { Component } from '@angular/core';
import { ELEMENTDATA } from '../../constants/ELEMENT-DATA';

@Component({
  selector: 'feed-record-table',
  templateUrl: './feed-record-table.component.html',
  styleUrl: './feed-record-table.component.scss'
})
export class FeedRecordTableComponent {
  colums = [
    { field: 'alimento', header: 'Alimento' },
    { field: 'calorias', header: 'Kcal' },
    { field: 'datahora', header: 'Hora' }
  ];

  data: any[] = [];

  ngOnInit() {
    this.data = ELEMENTDATA;
  }
}
