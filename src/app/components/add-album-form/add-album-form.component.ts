import { Component, OnInit, ViewChild } from '@angular/core';
import {AlbumsService} from "../../services/albums.service";
import {AlbumEventsService} from "../../services/album-events.service";
import {Album} from "../../interfaces/Album";
import { NgForm } from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AlertMessageService} from "../../services/alert-message.service";

@Component({
  selector: 'app-add-album-form',
  templateUrl: './add-album-form.component.html',
  styleUrls: ['./add-album-form.component.css']
})
export class AddAlbumFormComponent implements OnInit {
  album = {
    title: '',
    id: 1
  };
  buttonValue = 'Submit';
  formTitle = 'Add new album';
  @ViewChild('addAlbumForm') form: NgForm;
  constructor(
    public albumService: AlbumsService,
    public albumEvents: AlbumEventsService,
    public alertMessage: AlertMessageService
  ) { }

  ngOnInit() {
    this.albumEvents.albumEditObservableSubject.subscribe((item: Album) => {
      if (Object.keys(item).length !== 0) {
        this.album.title = item.title;
        this.album.id = item.id;
        this.buttonValue = 'Save';
        this.formTitle = 'Edit album';
      } else {
        this.album.title = '';
        this.album.id = item.id;
        this.buttonValue = 'Submit';
        this.formTitle = 'Add new album';
      }
    });
  }
  onFormSubmit() {
    if (this.buttonValue === 'Submit') {
      const newAlbum = {
        userId: 1,
        title: this.album.title,
        id: this.album.id
      };

      this.albumService.addNewAlbum(newAlbum).subscribe((data: Album) => {
        console.log('Get data FormComponent');
        this.albumEvents.emitAddNewAlbum(data);
        this.form.resetForm();
      });
    }
    if (this.buttonValue === 'Save') {
      this.albumService.editAlbum(this.album.id).subscribe((data) => {
        this.albumEvents.emitEditAlbum(this.album);
        this.form.resetForm();
        this.album.title = '';
        this.buttonValue = 'Submit';
        this.formTitle = 'Add new album';
        this.alertMessage.emitAddDeleteAlert('edited');
      });
    }

  }

}
