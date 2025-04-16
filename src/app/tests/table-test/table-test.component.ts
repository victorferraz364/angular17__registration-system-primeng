import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';



interface Product {
  code: number;
  name: string;
  category: string;
  quantity: number;
}

@Component({
  selector: 'app-table-test',
  standalone: true,
  imports: [TableModule],
  templateUrl: './table-test.component.html',
  styleUrl: './table-test.component.scss'
})
export class TableTestComponent implements OnInit {

  products: Product[] = [];

  ngOnInit() {
    this.products = [
      { code: 1001, name: 'Maçã', category: 'Frutas', quantity: 10 },
      { code: 1002, name: 'Arroz', category: 'Grãos', quantity: 20 },
      { code: 1003, name: 'Leite', category: 'Laticínios', quantity: 8 },
      { code: 1004, name: 'Peito de frango', category: 'Carnes', quantity: 5 },
    ];
  }


}
