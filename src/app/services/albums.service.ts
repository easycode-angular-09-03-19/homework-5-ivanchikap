import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
<<<<<<< HEAD
import { environment } from "../../environments/environment";
import { MyAlbum } from "../interface/MyAlbum";
=======
import { Observable } from "rxjs";
import { Album } from "../interfaces/Album";
import { environment } from "../../environments/environment";

>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
<<<<<<< HEAD
  apiUrl: string = environment.apiUrl;
=======
  private apiUrl: string = environment.apiUrl;
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
  constructor(
    private http: HttpClient
  ) { }

<<<<<<< HEAD
  getAlbums() {
    return this.http.get(`${this.apiUrl}/albums`);
  }

  addNewAlbum(value: MyAlbum) {
    return this.http.post(`${this.apiUrl}/albums`, value)
  }

=======
  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`);
  }
  addNewAlbum(value: Album) {
    return this.http.post(`${this.apiUrl}/albums`, value);
  }
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
  deleteAlbum(id: number) {
    return this.http.delete(`${this.apiUrl}/albums/${id}`);
  }

<<<<<<< HEAD
  editAlbum(album: MyAlbum) {
    return this.http.put(`${this.apiUrl}/albums/${album.id}`, album);
=======
  editAlbum(id: number) {
    return this.http.put(`${this.apiUrl}/albums/${id}`);
>>>>>>> 650e2d4105c93764f2300d10586974e7fd0cc1e4
  }
}
