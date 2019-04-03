<<<<<<< HEAD
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MyAlbum } from "../../interface/MyAlbum";
import { AlbumsService } from "../../services/albums.service";
import {AlertMessageService} from "../../services/alert-message.service";
=======
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Album } from "../../interfaces/Album";
import { AlbumsService } from "../../services/albums.service";
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
import {AlbumEventsService} from "../../services/album-events.service";

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  buttonValue = 'Edit';
<<<<<<< HEAD
  isPressed = false;
  @Input() item: MyAlbum;
  @Output() info = new EventEmitter();
  constructor(
    private albumsService: AlbumsService,
    private alertMessageService: AlertMessageService,
=======
  editIsPressed = false;
  @Input() item: Album;
  @Output() outputMessage = new EventEmitter();
  constructor(
    private albumsService: AlbumsService,
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
    private albumEvents: AlbumEventsService
  ) { }

  ngOnInit() {
<<<<<<< HEAD
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
=======
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
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
    }
  }
}
