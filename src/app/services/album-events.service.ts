import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import {Album} from "../interfaces/Album";

@Injectable({
  providedIn: 'root'
})
export class AlbumEventsService {
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
}
