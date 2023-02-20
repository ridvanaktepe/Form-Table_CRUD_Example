import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './model/User';
import { DbServiceService } from './service/db-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DbServiceService]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'front';
  // userList$: User[] = [];
  subscription!: Subscription;
  userList$: User[] =[];

  constructor(public service: DbServiceService) { }

  ngOnInit() {
    this.service.GetUserList().subscribe(
      data => {this.userList$ = data;});
    }

  ngOnDestroy() {

  }
}
