import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  private alertMessageAddSource = new BehaviorSubject({});
  public alertMessageAddObservableSubject = this.alertMessageAddSource.asObservable();

  constructor() { }

  emitShowMessage(value: string) {
    this.alertMessageAddSource.next(value);
  }
}
