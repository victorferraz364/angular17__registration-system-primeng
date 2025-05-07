import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scroller-view',
  templateUrl: './scroller-view.component.html',
  styleUrl: './scroller-view.component.scss'
})
export class ScrollerViewComponent implements OnInit {
  items!: string[];

  ngOnInit() {
      this.items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
  }

}
