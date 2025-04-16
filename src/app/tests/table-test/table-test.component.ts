import { Component, Input, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-table-test',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './table-test.component.html',
  styleUrl: './table-test.component.scss'
})
export class TableTestComponent {

  @Input() data: any[] = [];
  @Input() columns: { field: string; header: string }[] = [];


}
