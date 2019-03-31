import { Component, OnInit } from '@angular/core';
import {AlbumEventsService} from "../../services/album-events.service";
import {AlertMessageService} from "../../services/alert-message.service";


@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {
  isVisible = false;
  msg = '';
  action = '';

  constructor(
    public alertMessage: AlertMessageService
  ) { }

  ngOnInit() {
    this.alertMessage.alertMessageEventObservableSubject.subscribe((data: string) => {
      this.action = data;
      if (this.action === 'delete') {
        this.msg = 'Album was deleted';
        this.isVisible = true;
        setTimeout(() => {
          this.isVisible = false;
          }, 2000);
      }
      if (this.action === 'add') {
        this.msg = 'Album was added';
        this.isVisible = true;
        setTimeout(() => {
          this.isVisible = false;
        }, 2000);
      }

      if (this.action == 'edited') {
        this.msg = 'Album was edited';
        this.isVisible = true;
        setTimeout(() => {
          this.isVisible = false;
        }, 2000);
      }
    });
  }
}
