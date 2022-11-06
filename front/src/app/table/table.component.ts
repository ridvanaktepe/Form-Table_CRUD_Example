import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUser } from '../model/IUser';
import { User } from '../model/User';
import { DbServiceService } from '../service/db-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [DbServiceService],
})
export class TableComponent implements OnInit {
  userList: User[] = [];
  // userList$: Observable<User[]> = new Observable();

  constructor(private service: DbServiceService) {}

  ngOnInit(): void {
    // this.userList$ = this.getAllUser();
    this.service.GetUserList().subscribe((data) => {
      this.userList = data;
    });
    console.log(this.userList);
  }

  getAllUser(): Observable<User[]> {
    return this.service.GetUserList().pipe(
      map((data) => {
        this.userList = data;
        return this.userList;
      })
    );
  }
}
