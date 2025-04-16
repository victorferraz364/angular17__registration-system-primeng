import { Component } from '@angular/core';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';

@Component({
  selector: 'app-button-test',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './button-test.component.html',
  styleUrl: './button-test.component.scss'
})
export class ButtonTestComponent {

}
