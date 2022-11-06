import { IUser } from "./IUser";

export class User implements IUser {

UserId: string;
  UserName: string;
  UserSurname: string;
  UserEmail: string;
  UserPassword: string;

  constructor(id: string="", name: string="", surname: string="", email: string="", password: string="") {
    this.UserId = id;
    this.UserName = name;
    this.UserSurname = surname;
    this.UserEmail = email;
    this.UserPassword = password;
  }
}
