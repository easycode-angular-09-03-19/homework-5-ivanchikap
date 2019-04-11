import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from "../../services/alert-message.service";
import {AlertMessage} from "../../interface/AlertMessage";

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {
  isVisible = true;
  alertMessage = '';
  alertClass = '';
  constructor(
    private alertMessagesService: AlertMessageService
  ) { }

  ngOnInit() {
    this.alertMessagesService.alertMessageAddObservableSubject.subscribe((data: AlertMessage) => {
      if (Object.keys(data).length !== 0) {
        this.isVisible = true;
        this.alertMessage = data.message;
        this.alertClass = data.type;
        setTimeout(() => {
          this.isVisible = !data.timeOut;
        }, 2000);
      }
    });
  }
}
