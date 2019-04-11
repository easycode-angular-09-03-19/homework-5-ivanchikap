import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { AlertMessage } from "../interface/AlertMessage";

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  private alertMessageAddSource = new BehaviorSubject({});
  public alertMessageAddObservableSubject = this.alertMessageAddSource.asObservable();

  constructor() { }

  emitShowMessage(value: AlertMessage) {
    this.alertMessageAddSource.next(value);
  }
}
