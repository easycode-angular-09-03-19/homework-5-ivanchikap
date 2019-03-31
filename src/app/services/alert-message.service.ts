import { Injectable } from '@angular/core';
import {AlbumEventsService} from "./album-events.service";
import {BehaviorSubject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  private alertMessageEventSource = new BehaviorSubject({});
  public  alertMessageEventObservableSubject = this.alertMessageEventSource.asObservable();

  constructor() { }

  emitAddDeleteAlert(msg: string) {
    this.alertMessageEventSource.next(msg);
  }
}
