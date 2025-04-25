import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar'

@Component({
  selector: 'feed-record-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, AvatarModule],
  templateUrl: './feed-record-dialog.component.html',
  styleUrl: './feed-record-dialog.component.scss'
})
export class FeedRecordDialogComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
