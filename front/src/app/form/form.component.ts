import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User';
import { IUser } from '../model/IUser';
import { DbServiceService } from '../service/db-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  isChecked: boolean = false;

  user: User = { UserId: "", UserName: "", UserSurname: "", UserEmail: "", UserPassword: "", };
  userList: User[] = [];
  iuserList?: IUser;

  constructor(private service: DbServiceService) {
    // service.GetUserList().subscribe(response => { this.userList = response })
  }

  // constructor(){}

  UserForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  ngOnInit(): void {

  }

  PostForm() {
    console.log(this.UserForm.value);
    console.log(this.UserForm.status);
    console.log("-----------------------------" + this.user.UserId);

    if (this.UserForm.valid) {
      this.user.UserName = this.UserForm.value.name!;
      this.user.UserSurname = this.UserForm.value.surname!;
      this.user.UserEmail = this.UserForm.value.email!;
      this.user.UserPassword = this.UserForm.value.password!;
      console.log(this.user);
      this.service.AddUser(this.user).subscribe({ next: (response) => { console.log(response) }, error: (error) => { console.log(error) } });

    }
  }

}
