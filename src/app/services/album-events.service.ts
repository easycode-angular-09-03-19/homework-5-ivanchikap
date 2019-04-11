import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { MyAlbum } from "../interface/MyAlbum";

@Injectable({
  providedIn: 'root'
})
export class AlbumEventsService {

  private addAlbumEventSource = new BehaviorSubject({});
  public addAlbumEventObservableSubject = this.addAlbumEventSource.asObservable();

  private editAlbumEventSource = new BehaviorSubject({});
  public editAlbumEventObservableSubject = this.editAlbumEventSource.asObservable();

  private cancelEditingEventSource = new BehaviorSubject({});
  public cancelEditingEventObservableSubject = this.cancelEditingEventSource.asObservable();

  private finishEditAlbumEventSource = new BehaviorSubject({});
  public finishEditAlbumObservableSubject = this.finishEditAlbumEventSource.asObservable();

  constructor() { }

  emitAddNewAlbum(value: MyAlbum) {
    this.addAlbumEventSource.next(value);
  }

  emitEditAlbum(album: MyAlbum) {
    this.editAlbumEventSource.next(album);
  }

  emitCancelEditing(album: MyAlbum) {
    this.cancelEditingEventSource.next(album);
  }

  emitFinishEditAlbum(value: MyAlbum) {
    this.finishEditAlbumEventSource.next(value);
  }

}
