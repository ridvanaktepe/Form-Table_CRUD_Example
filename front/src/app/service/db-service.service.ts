import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, tap, delay, take, catchError, throwError, Subject, BehaviorSubject, of, switchMap } from 'rxjs';
import { User } from '../model/User';
import { IUser } from 'app/model/IUser';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  // URL address
  _url = 'http://localhost:4201/api/user/';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // data = new BehaviorSubject<User[]>([]);
  public userList$:User[] = [];
  userListSubject: BehaviorSubject<User[]> = new BehaviorSubject(this.userList$);
  // public subject$: Observable<User[]> = this._subject.asObservable(); // asobservavle ne işe yarıyor ?

  constructor(private http: HttpClient, public toastr: ToastrService) {  }

  ngOnInit() {
    this.GetUserList();
  }

  // getall
  GetUserList(): Observable<User[]> {
    return this.http.get<User[]>(this._url + 'getall').pipe(
      tap((response: User[]) => {
        // console.log(response);
        this.userListSubject.next(response);
      }),
      catchError(this.handleError)
    );
  }

  // create
  AddUser(_user: User): Observable<User[]> {
      return this.http.post<User[]>(this._url + 'create', JSON.stringify(_user), this.httpOptions)
      .pipe(
        tap((response) => {
          // console.log(response);
          // this.userList$=(response);
          this.userListSubject.next(response);
        })
      );
  }

  // update
  UpdateUser(_user: User) {
    console.log("-----------update");
    console.log(_user.UserId);
    return this.http.put(this._url + 'update', JSON.stringify(_user), this.httpOptions)
  }

  // delete
  DeleteUser(_user: User) {
    console.log("-----------delete");
    console.log(_user.UserId);
    return this.http.delete(this._url + 'delete/' + _user.UserId).subscribe(
      (_)=>{
        let index = this.userListSubject.value.indexOf(_user);
        console.log(index);
        this.userListSubject.value.splice(index, 1);

      });

  }

  private handleError(error: any) {
    return throwError(() => error);
  }
}
