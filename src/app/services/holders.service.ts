import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Holder = {
  id: number,
  cpf: string,
  name: string,
  account: {
    number: number,
    balance: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class HoldersService {

  baseUrl: string = 'https://ericeol-bankline-api.herokuapp.com';

  constructor(private http: HttpClient) { }
  
  all(): Observable<Holder[]> {
    return this.http.get<Holder[]>(`${this.baseUrl}/holders`);
  }

  create(holder: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/holders`, holder);
  }
}