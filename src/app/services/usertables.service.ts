import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsertablesService {

  baseurl= 'https://localhost:7102';

  constructor(
    private http: HttpClient,
  ) { }
  
  // GET
  getAllUserAlbum(): Observable<object> {
    return this.http.get(this.baseurl + '/allAlbumByUser');
  }
  
}

