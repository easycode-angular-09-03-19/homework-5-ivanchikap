import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
=======
import {AlbumEventsService} from "./album-events.service";
import {BehaviorSubject} from "rxjs/index";
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
<<<<<<< HEAD

  private alertMessageAddSource = new BehaviorSubject({});
  public alertMessageAddObservableSubject = this.alertMessageAddSource.asObservable();

  constructor() { }

  emitShowMessage(value: string) {
    this.alertMessageAddSource.next(value);
=======
  private alertMessageEventSource = new BehaviorSubject({});
  public  alertMessageEventObservableSubject = this.alertMessageEventSource.asObservable();

  constructor() { }

  emitAddDeleteAlert(msg: string) {
    this.alertMessageEventSource.next(msg);
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
  }
}
