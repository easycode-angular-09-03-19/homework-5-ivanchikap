import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MyAlbum } from "../../interface/MyAlbum";
import { AlbumsService } from "../../services/albums.service";
import {AlertMessageService} from "../../services/alert-message.service";
import {AlbumEventsService} from "../../services/album-events.service";

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  buttonValue = 'Edit';
  isPressed = false;
  @Input() item: MyAlbum;
  @Output() info = new EventEmitter();
  constructor(
    private albumsService: AlbumsService,
    private alertMessageService: AlertMessageService,
    private albumEvents: AlbumEventsService
  ) { }

  ngOnInit() {
    this.albumEvents.finishEditAlbumObservableSubject.subscribe((data: MyAlbum) => {
      if (Object.keys(data).length !== 0 && this.item.id === data.id) {
        this.item.title = data.title;
        this.isPressed = false;
        this.buttonValue = 'Edit';
      }
    })
  }

  onDelete() {
    this.albumsService.deleteAlbum(this.item.id).subscribe((data) => {
      if(data) {
        this.info.emit({method: 'delete', id: this.item.id});

        this.alertMessageService.emitShowMessage('delete');
      }
    });
  }

  onEdit() {
    if (this.buttonValue == 'Edit') {
      this.buttonValue = 'Cancel';
      this.isPressed = true;
      this.alertMessageService.emitShowMessage('editing');
      this.albumEvents.emitEditAlbum(this.item);
    } else {
      this.buttonValue = 'Edit';
      this.isPressed = false;
      this.alertMessageService.emitShowMessage('cancel');
      this.albumEvents.emitCancelEditing(this.item);
    }
  }
}
