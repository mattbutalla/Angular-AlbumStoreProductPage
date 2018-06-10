import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import {} from 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

  private _albumUrl: string = '../assets/album.json'

  constructor(private _http:Http) { }

  getAlbum(id: number): Observable<Response> {
    return this._http.get(this._albumUrl).map(response => response.json());
  }

}
