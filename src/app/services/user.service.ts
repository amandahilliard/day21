import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  userById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`) 
  }
}
