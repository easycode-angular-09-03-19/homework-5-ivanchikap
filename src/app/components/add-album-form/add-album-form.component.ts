import { Component, OnInit, ViewChild } from '@angular/core';
<<<<<<< HEAD
import { AlbumsService } from "../../services/albums.service";
import { MyAlbum } from "../../interface/MyAlbum";
import { AlbumEventsService } from "../../services/album-events.service";
import { NgForm } from "@angular/forms";
import { AlertMessageService } from "../../services/alert-message.service";
import { environment } from "../../../environments/environment";
=======
import {AlbumsService} from "../../services/albums.service";
import {AlbumEventsService} from "../../services/album-events.service";
import {Album} from "../../interfaces/Album";
import { NgForm } from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AlertMessageService} from "../../services/alert-message.service";
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4

@Component({
  selector: 'app-add-album-form',
  templateUrl: './add-album-form.component.html',
  styleUrls: ['./add-album-form.component.css']
})
export class AddAlbumFormComponent implements OnInit {
  album = {
    title: '',
<<<<<<< HEAD
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
=======
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
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
    }

  }

<<<<<<< HEAD

=======
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
}
