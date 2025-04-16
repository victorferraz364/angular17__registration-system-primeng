import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonTestComponent } from './tests/button-test/button-test.component';
import { TableTestComponent } from './tests/table-test/table-test.component';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonTestComponent, 
    TableTestComponent,
    CoreModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste-angular17';
}
