import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AlertMessageService } from "../../services/alert-message.service";
=======
import {AlbumEventsService} from "../../services/album-events.service";
import {AlertMessageService} from "../../services/alert-message.service";

>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {
  isVisible = false;
<<<<<<< HEAD
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
=======
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
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
        setTimeout(() => {
          this.isVisible = false;
        }, 2000);
      }

<<<<<<< HEAD
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
=======
      if (this.action == 'edited') {
        this.msg = 'Album was edited';
        this.isVisible = true;
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
        setTimeout(() => {
          this.isVisible = false;
        }, 2000);
      }
<<<<<<< HEAD
    })
  }

=======
    });
  }
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
}
