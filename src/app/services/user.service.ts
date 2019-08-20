import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RandomResponse } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = environment.randomUserApiUrl + '?seed=abc&';
  headers: HttpHeaders;

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getUsers(size: number = 20) : Observable<RandomResponse> {
    return this.http.get(this.url + 'results=' + size, { headers: this.headers })
      .pipe(map(response => <RandomResponse>response));
  }

  getUserPagination(page: number, size: number = 20) : Observable<RandomResponse> {
    return this.http.get(this.url + 'page=' + page + '&results=' + size, { headers: this.headers })
      .pipe(map(response => <RandomResponse>response));
  }

  getUser() : Observable<RandomResponse> {
    return this.http.get(this.url, { headers: this.headers })
      .pipe(map(response => <RandomResponse>response));
  }
}
