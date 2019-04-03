import { Component, OnInit, ViewChild } from '@angular/core';
import { AlbumsService } from "../../services/albums.service";
import { MyAlbum } from "../../interface/MyAlbum";
import { AlbumEventsService } from "../../services/album-events.service";
import { NgForm } from "@angular/forms";
import { AlertMessageService } from "../../services/alert-message.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-add-album-form',
  templateUrl: './add-album-form.component.html',
  styleUrls: ['./add-album-form.component.css']
})
export class AddAlbumFormComponent implements OnInit {
  album = {
    title: '',
    cardTitle: 'Add new album',
    buttonValue: 'Submit',
    id: 0
  };
  counter = 101;
  @ViewChild('addAlbumForm') form: NgForm;
  constructor(
    private albumsService: AlbumsService,
    private albumEvents: AlbumEventsService,
    private alertMessageService: AlertMessageService
  ) { }

  ngOnInit() {
    this.albumEvents.editAlbumEventObservableSubject.subscribe((data: MyAlbum) => {
      this.album.title = data.title;
      this.album.buttonValue = 'Save';
      this.album.cardTitle = `Edit album with id: ${data.id}`;
      this.album.id = data.id;
    });

    this.albumEvents.cancelEditingEventObservableSubject.subscribe((data: MyAlbum) => {
      this.album.title = '   ';
      this.album.buttonValue = 'Submit';
      this.album.cardTitle = `Add new album`;
    });
  }

  onFormSubmit() {
    if (this.album.buttonValue === 'Submit') {
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
      this.alertMessageService.emitShowMessage('add');
    }

    if (this.album.buttonValue === 'Save') {
      this.albumsService.editAlbum(this.album).subscribe((data: MyAlbum) => {
        this.album.title = '   ';
        this.album.cardTitle = 'Add new album';
        this.album.buttonValue = 'Submit';
        this.alertMessageService.emitShowMessage('edited');
        this.albumEvents.emitFinishEditAlbum(data);
      })
    }

  }


}
