import { Component, OnInit, OnChanges, SimpleChanges, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { map, Observable, BehaviorSubject, switchMap } from 'rxjs';
import { IUser } from '../model/IUser';
import { User } from '../model/User';
import { DbServiceService } from '../service/db-service.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [],
})
export class TableComponent implements OnInit {

  searchText: any;
  orderHeader: any;
  orderReverse: boolean = false;
  page: number = 1;
  itemCount: number = 0;
  tableSize: number = 5;
  tableSizes: any = [5, 10 ,15 ,20];
  userList$: User[] = [];
  userEditCopy: User = {
    UserId: 0,
    UserName: '',
    UserSurname: '',
    UserEmail: '',
    UserPassword: '',
    editUser: false,
    editUserField: ''
  };

  constructor(public service: DbServiceService, public toastr: ToastrService) { }

  //  ngOnChanges(changes: SimpleChanges): void {
  //     console.log(changes);
  //     console.log(this.userList$);
  //   }


  ngOnInit() {
    this.getAllUser();
    this.service.userListSubject.subscribe(
      userListStream => {
        this.userList$ = userListStream;
        this.userList$.forEach(_user => { _user.editUserField = '' });
      }
    );
  }

  getAllUser(): void {
    this.service.GetUserList().subscribe(responce => {
      // console.log(responce);
      this.userList$ = responce;
      // this.cdref.detectChanges();
    });

  }

  checkEdit(user: User) {
    let userEdited = this.userList$.find((_user) => _user.UserId === this.userEditCopy.UserId);
    let index = this.userList$.findIndex((_user) => _user.UserId === this.userEditCopy.UserId);

    if (this.userEditCopy.UserName !== userEdited?.UserName || this.userEditCopy.UserSurname !== userEdited?.UserSurname ||
      this.userEditCopy.UserEmail !== userEdited?.UserEmail || this.userEditCopy.UserPassword !== userEdited?.UserPassword) {

      this.userList$[index] = this.userEditCopy;

      if (user.UserId !== this.userEditCopy.UserId) {
        this.userEditCopy = { ...user };
      }

    }
    else {
      this.userEditCopy = { ...user };
    }
  }

  userEdit(user: User) {
    //just let one user can be edited same time
    this.userList$.forEach(_user => { _user.editUserField = ''; });

    this.checkEdit(user);

    user.editUserField = 'all'
  }

  fieldEdit(user: User, _editUserField: string) {
    //just let one user can be edited same time
    this.userList$.forEach(_user => { _user.editUserField = ''; });

    this.checkEdit(user);

    user.editUserField = _editUserField;
  }

  cancelEdit() {
    this.userList$.forEach(_user => { _user.editUserField = ''; });
  }

  updateUser(user: User) {

    this.service.UpdateUser(user).subscribe({
      next: (_) => {
        this.userEditCopy = { ...user };
        this.toastr.info("The user has been successfully updated");
      },
      error: (error) => {
        console.log(error);
        this.toastr.error("Something went wrong");
      },
    });

    user.editUser = false;
    user.editUserField = '';
  }

  deleteUser(user: User) {
    this.service.DeleteUser(user);
    this.toastr.warning("The user has been successfully deleted");
    // let index = this.userList$.indexOf(user);
    // this.userList$.splice(index, 1);
  }

  sort(headerName:String){
    this.orderHeader = headerName;
    console.log(this.orderHeader);
    this.orderReverse = !this.orderReverse;
    console.log(this.orderReverse);
  }

  onTableDataChange(event:any){
    this.page = event;
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
}
