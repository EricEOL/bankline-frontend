import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Movement = {
  id: string,
  createdAt: string,
  description: string,
  value: number,
  movementType: string,
  accountId: number
}

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  baseUrl: string = "https://ericeol-bankline-api.herokuapp.com";

  constructor(private http: HttpClient) { }

  all(holderId: number): Observable<Movement[]> {
    return this.http.get<Movement[]>(`${this.baseUrl}/movements/${holderId}`);
  }

  create(movement: Movement): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/movements`, movement);
  }
}
