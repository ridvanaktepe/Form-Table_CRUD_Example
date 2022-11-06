import { IUser } from './IUser';

export class User implements IUser {
  UserId: string;
  UserName: string;
  UserSurname: string;
  UserEmail: string;
  UserPassword: string;

  constructor(
    UserId: string = '',
    UserName: string = '',
    UserSurname: string = '',
    UserEmail: string = '',
    UserPassword: string = ''
  ) {
    this.UserId = UserId;
    this.UserName = UserName;
    this.UserSurname = UserSurname;
    this.UserEmail = UserEmail;
    this.UserPassword = UserPassword;
  }
}
