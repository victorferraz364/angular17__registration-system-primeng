import { Component, OnInit } from '@angular/core';
import { CoreModule } from './core/core.module';
import { NutritionModule } from "./freatures/nutrition.module/nutrition.module";
import { PrimeNGConfig } from 'primeng/api';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [


    CoreModule,
    NutritionModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {
    
  }

  ngOnInit() {
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
    this.primengConfig.ripple = true;
    this.primengConfig.csp.set({nonce: '...'});
  }
}
