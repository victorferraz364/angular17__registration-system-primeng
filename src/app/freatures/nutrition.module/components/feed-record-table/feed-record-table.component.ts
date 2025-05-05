import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Meals } from '../../interfaces/IMeals';
import { Table } from 'primeng/table';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'feed-record-table',
  templateUrl: './feed-record-table.component.html',
  styleUrl: './feed-record-table.component.scss'
})
export class FeedRecordTableComponent implements OnChanges {
  
  @Input() dados: Meals[] = [];
  @ViewChild('dt') dt!: Table;

  initialValue: Meals[] = [];
  sortState: boolean | null = null;
  selectedMeals: Meals[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dados']) {
      this.initialValue = [...this.dados];
    }
  }




  // prime ng logic

  customSort(event: SortEvent) {
    if (!event.data) return;

    if (this.sortState === null) {
      this.sortState = true;
      this.sortTableData(event, 1);
    } else if (this.sortState === true) {
      this.sortState = false;
      this.sortTableData(event, -1);
    } else {
      this.sortState = null;
      this.dados = [...this.initialValue];
      this.dt.reset();
    }
  }

  sortTableData(event: SortEvent, order: number) {
    const field = event.field;
    if (!field) return;

    this.dados.sort((a: any, b: any) => {
      const val1 = a[field];
      const val2 = b[field];

      let result = 0;

      if (val1 == null && val2 != null) result = -1;
      else if (val1 != null && val2 == null) result = 1;
      else if (val1 == null && val2 == null) result = 0;
      else if (typeof val1 === 'string' && typeof val2 === 'string') result = val1.localeCompare(val2);
      else if (val1 instanceof Date && val2 instanceof Date) result = val1.getTime() - val2.getTime();
      else result = val1 < val2 ? -1 : val1 > val2 ? 1 : 0;

      return order * result;
    });
  }

}
