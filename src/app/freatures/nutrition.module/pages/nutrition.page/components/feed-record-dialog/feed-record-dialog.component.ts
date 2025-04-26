import { Component } from '@angular/core';


@Component({
  selector: 'feed-record-dialog',
  templateUrl: './feed-record-dialog.component.html',
  styleUrl: './feed-record-dialog.component.scss'
})
export class FeedRecordDialogComponent {
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  time: Date[] | undefined;
}
