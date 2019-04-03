import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { MyAlbum } from "../interface/MyAlbum";
=======
import { BehaviorSubject } from "rxjs";
import {Album} from "../interfaces/Album";
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4

@Injectable({
  providedIn: 'root'
})
export class AlbumEventsService {
<<<<<<< HEAD

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
    console.log('ALBUMEvents', value);
    this.finishEditAlbumEventSource.next(value);
  }

=======
  private albumAddEventSource = new BehaviorSubject({});
  public  albumAddEventObservableSubject = this.albumAddEventSource.asObservable();

  private albumEditSource = new BehaviorSubject({});
  public  albumEditObservableSubject = this.albumEditSource.asObservable();

  private albumDeleteSource = new BehaviorSubject({});
  public  albumDeleteObservableSubject = this.albumDeleteSource.asObservable();

  constructor() {}

  emitAddNewAlbum(value: Album) {
    console.log('Service:', value);
    this.albumAddEventSource.next(value);
  }

  emitDeleteAlbum(albumId: number) {
    this.albumDeleteSource.next(albumId);
  }

  emitEditAlbum(album: Album) {
    this.albumEditSource.next(album);
  }
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
}
