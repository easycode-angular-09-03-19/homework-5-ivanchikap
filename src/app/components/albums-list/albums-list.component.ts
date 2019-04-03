import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AlbumsService } from "../../services/albums.service";
import { MyAlbum } from "../../interface/MyAlbum";
import { AlbumEventsService } from "../../services/album-events.service";
import { OutputInfo } from "../../interface/OutputInfo";
=======
import { AlbumsService } from '../../services/albums.service';
import { Album } from "../../interfaces/Album";
import {AlbumEventsService} from "../../services/album-events.service";
import {AlertMessageService} from "../../services/alert-message.service";
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
<<<<<<< HEAD
  albums: MyAlbum[] = [];
  constructor(
    private albumsService: AlbumsService,
    private albumEvents: AlbumEventsService
  ) { }

  ngOnInit() {
    this.albumsService.getAlbums().subscribe((data: MyAlbum[]) => {
      this.albums = data;
=======
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
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
    }, (err) => {
      console.log(err);
    }, () => {
      console.log('complete');
    });

<<<<<<< HEAD
    this.albumEvents.addAlbumEventObservableSubject.subscribe((data: MyAlbum) => {
      if(data.title) {
        this.albums.unshift(data);
      }
    })

  }
  onOutputDelete(msg: OutputInfo) {
    console.log(msg);
    if(msg) {
      this.albums = this.albums.filter((album) => {
        return album.id != msg.id
      });
    }
  }

=======
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
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
}
