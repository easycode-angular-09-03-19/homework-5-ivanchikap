import { Component, OnInit } from '@angular/core';
import { AlbumsService } from "../../services/albums.service";
import { MyAlbum } from "../../interface/MyAlbum";
import { AlbumEventsService } from "../../services/album-events.service";

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  albums: MyAlbum[] = [];
  constructor(
    private albumsService: AlbumsService,
    private albumEvents: AlbumEventsService
  ) { }

  ngOnInit() {
    this.albumsService.getAlbums().subscribe((data: MyAlbum[]) => {
      this.albums = data;
    }, (err) => {
      console.log(err);
    }, () => {
      console.log('complete');
    });

    this.albumEvents.addAlbumEventObservableSubject.subscribe((data: MyAlbum) => {
      if(data.title) {
        this.albums.unshift(data);
      }
    });
  }

  onOutputDelete(id: number) {
    if(id) {
      this.albums = this.albums.filter((album) => {
        return album.id !== id;
      });
    }
  }
}
