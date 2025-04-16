import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-test',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './button-test.component.html',
  styleUrl: './button-test.component.scss'
})
export class ButtonTestComponent {

}
