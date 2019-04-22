import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageFromSearch } from '../Interfaces/Searchinterface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // https://pixabay.com/api/?key={ KEY }&q=yellow+flowers&image_type=photo

  constructor(private httpClient: HttpClient) { }

  getImages(data): Observable<ImageFromSearch> {
    const  params = new HttpParams().set('key', environment.UserKey).set('q', data).set('image_type', 'photo');

    return this.httpClient.get(environment.BackendUrl, {params}) as Observable<ImageFromSearch>;
  }
}


