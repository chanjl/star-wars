import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    console.log("getCategories>");
    return this.http.get(`${environment.swapi_url}`);
    // return this.http.get(`${environment.swapi_url}${city}`);
  }
}