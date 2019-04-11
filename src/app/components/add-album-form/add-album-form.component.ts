import { Component, OnInit, ViewChild } from '@angular/core';
import { AlbumsService } from "../../services/albums.service";
import { MyAlbum } from "../../interface/MyAlbum";
import { AlbumEventsService } from "../../services/album-events.service";
import { NgForm } from "@angular/forms";
import { AlertMessageService } from "../../services/alert-message.service";

@Component({
  selector: 'app-add-album-form',
  templateUrl: './add-album-form.component.html',
  styleUrls: ['./add-album-form.component.css']
})
export class AddAlbumFormComponent implements OnInit {
  album = {
    title: '',
    id: 0
  };
  isEditingNow = false;
  counter = 101;
  @ViewChild('addAlbumForm') form: NgForm;
  constructor(
    private albumsService: AlbumsService,
    private albumEvents: AlbumEventsService,
    private alertMessageService: AlertMessageService
  ) { }

  ngOnInit() {
    this.albumEvents.editAlbumEventObservableSubject.subscribe((data: MyAlbum) => {
      if (Object.keys(data).length !== 0) {
        this.album.title = data.title;
        this.isEditingNow = true;
        this.album.id = data.id;
      }
    });

    this.albumEvents.cancelEditingEventObservableSubject.subscribe((data: MyAlbum) => {
      this.album.title = '   ';
      this.isEditingNow = false;
    });
  }

  onFormSubmit() {
    if (this.isEditingNow === false) {
      const newAlbum = {
        userId: this.counter,
        title: this.album.title
      };
      this.counter++;
      this.albumsService.addNewAlbum(newAlbum).subscribe((data: MyAlbum) => {
        this.albumEvents.emitAddNewAlbum(data);
      }, (err) => {
        console.log(err);
      });
      this.form.resetForm();
      this.alertMessageService.emitShowMessage({message: 'Album is added', type: 'alert-success', timeOut: true});
    }

    if (this.isEditingNow === true) {
      this.albumsService.editAlbum(this.album).subscribe((data: MyAlbum) => {
        this.album.title = '   ';
        this.isEditingNow = false;
        this.alertMessageService.emitShowMessage({message: 'Album is edited', type: 'alert-success', timeOut: true});
        this.albumEvents.emitFinishEditAlbum(data);
      });
    }
  }
}
