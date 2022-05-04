import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoldersService {

  baseUrl: string = 'https://ericeol-bankline-api.herokuapp.com';

  constructor(private http: HttpClient) { }
  
  all(): Observable<any> {
    return this.http.get(`${this.baseUrl}/holders`);
  }
}