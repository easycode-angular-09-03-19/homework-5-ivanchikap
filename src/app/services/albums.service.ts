import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { MyAlbum } from "../interface/MyAlbum";
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getAlbums() {
    return this.http.get(`${this.apiUrl}/albums`);
  }

  addNewAlbum(value: MyAlbum) {
    return this.http.post(`${this.apiUrl}/albums`, value)
  }

  deleteAlbum(id: number) {
    return this.http.delete(`${this.apiUrl}/albums/${id}`);
  }

  editAlbum(album: MyAlbum) {
    return this.http.put(`${this.apiUrl}/albums/${album.id}`, album);
  }
}
