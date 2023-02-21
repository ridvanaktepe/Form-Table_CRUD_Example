import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User';
import { IUser } from '../model/IUser';
import { DbServiceService } from '../service/db-service.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [],
})
export class FormComponent implements OnInit {

  isChecked: boolean = false;

  user: User = {
    UserId: 0,
    UserName: '',
    UserSurname: '',
    UserEmail: '',
    UserDate: '',
    editUser: false,
    editUserField: ''
  };

  UserForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(2),]),
    email: new FormControl('', [Validators.required, Validators.email]),
    date: new FormControl('', [Validators.required,]),
  });

  userList$: User[] = [];

  constructor(private service: DbServiceService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.userListSubject.subscribe(userListStream => { this.userList$ = userListStream; });
  }

  PostForm() {
    if (this.UserForm.valid) {
      this.user.UserName = this.UserForm.value.name!;
      this.user.UserSurname = this.UserForm.value.surname!;
      this.user.UserEmail = this.UserForm.value.email!;
      this.user.UserDate = this.UserForm.value.date!;

      this.service.AddUser(this.user).subscribe((responce) => {
        console.log(this.service.userListSubject.value);
        console.log(responce);
        this.toastr.success("The user has been successfully added");
        this.UserForm.reset();
      },
      (error) => this.toastr.error(error));

    }
    else{
      this.toastr.warning("Please fill the form");
    }
  }
}

