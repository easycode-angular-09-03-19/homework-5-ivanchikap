import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Album } from "../../interfaces/Album";
import {AlbumEventsService} from "../../services/album-events.service";
import {AlertMessageService} from "../../services/alert-message.service";

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  albums: Album[]=[];

  constructor(
    public albumService: AlbumsService,
    public albumEvents: AlbumEventsService,
    public alertMessage: AlertMessageService
  ) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe((data: Album[]) => {
      this.albums = data;
      console.log(data);
    }, (err) => {
      console.log(err);
    }, () => {
      console.log('complete');
    });

    this.albumEvents.albumAddEventObservableSubject.subscribe((data: Album) => {
      if (data.title) {
        this.albums.unshift(data);
        this.alertMessage.emitAddDeleteAlert('add');
      }
    });
  }

  onDelete(msg) {
    this.albumEvents.albumDeleteObservableSubject.subscribe( (albumId: number) => {
      this.albums = this.albums.filter((album) => album.id != albumId);
      this.alertMessage.emitAddDeleteAlert(msg);
    });
  }
}
