import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from "../../services/alert-message.service";

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {
  isVisible = false;
  alertMessage = '';
  constructor(
    private alertMessagesService: AlertMessageService
  ) { }

  ngOnInit() {
    this.alertMessagesService.alertMessageAddObservableSubject.subscribe((data: string) => {
      if (data === 'delete') {
        this.isVisible = true;
        this.alertMessage = 'Album is deleted';
        setTimeout(() => {
          this.isVisible = false;
        }, 2000);
      }

      if(data === 'add') {
        this.isVisible = true;
        this.alertMessage = 'Album is added';
        setTimeout(() => {
          this.isVisible = false;
        }, 2000);
      }

      if(data === 'editing') {
        this.isVisible = true;
        this.alertMessage = 'Album is editing'
      }

      if(data === 'cancel') {
        this.isVisible = false;
      }

      if(data === 'edited') {
        this.isVisible = true;
        this.alertMessage = 'Album is edited';
        setTimeout(() => {
          this.isVisible = false;
        }, 2000);
      }
    })
  }

}
