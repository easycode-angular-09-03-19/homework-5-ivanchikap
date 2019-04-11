import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { MyAlbum } from "../interface/MyAlbum";
import { Observable } from "rxjs/internal/Observable";
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getAlbums(): Observable<MyAlbum[]> {
    return this.http.get<MyAlbum[]>(`${this.apiUrl}/albums`);
  }

  addNewAlbum(value: MyAlbum): Observable<MyAlbum> {
    return this.http.post<MyAlbum>(`${this.apiUrl}/albums`, value);
  }

  deleteAlbum(id: number) {
    return this.http.delete(`${this.apiUrl}/albums/${id}`);
  }

  editAlbum(album: MyAlbum): Observable<MyAlbum> {
    return this.http.put<MyAlbum>(`${this.apiUrl}/albums/${album.id}`, album);
  }
}
