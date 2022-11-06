import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map, tap, delay, take, catchError, throwError } from 'rxjs';
import { User } from '../model/User';

@Injectable()
export class DbServiceService {

  _url = "http://localhost:4201/api/user/";

  constructor(private http: HttpClient) { }

  // getall
  GetUserList(): Observable<User[]> {
    return this.http.get<User[]>(this._url + "getall").pipe(tap(data => { console.log(data); }), catchError(this.handleError));
  }

  // create
  AddUser(_user: User): Observable<User> {
    return this.http.post<User>(this._url + "create", JSON.stringify(_user));
  }

  private handleError(error: any) {
    return throwError(() => error);
  }
}
