import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Album } from "../../interfaces/Album";
import { AlbumsService } from "../../services/albums.service";
import {AlbumEventsService} from "../../services/album-events.service";

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  buttonValue = 'Edit';
  editIsPressed = false;
  @Input() item: Album;
  @Output() outputMessage = new EventEmitter();
  constructor(
    private albumsService: AlbumsService,
    private albumEvents: AlbumEventsService
  ) { }

  ngOnInit() {
    this.albumEvents.albumEditObservableSubject.subscribe((data) => {
      if (Object.keys(data).length !== 0 && this.item.id === data.id) {
        console.log('final', data);
        this.editIsPressed = false;
        this.buttonValue = 'Edit';
        this.item.title = data.title;
        this.outputMessage.emit('edited');
      }
    });
  }

  onDeleteHandler() {
    this.outputMessage.emit('delete');
    this.albumsService.deleteAlbum(this.item.id).subscribe((data) => {
      this.albumEvents.emitDeleteAlbum(this.item.id);
    });

  }

  onEditHandler() {
    if (this.buttonValue === 'Edit') {
      this.albumEvents.emitEditAlbum(this.item);
      this.buttonValue = 'Cancel';
      this.editIsPressed = true;
    } else {
      this.albumEvents.emitEditAlbum({});
      this.buttonValue = 'Edit';
      this.editIsPressed = false;
    }
  }
}
