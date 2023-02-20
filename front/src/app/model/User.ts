import { IUser } from './IUser';

export class User implements IUser {
  UserId: number;
  UserName: string;
  UserSurname: string;
  UserEmail: string;
  UserPassword: string;
  editUser: boolean;
  editUserField: string;

  constructor(
    UserId: number = 0,
    UserName: string = '',
    UserSurname: string = '',
    UserEmail: string = '',
    UserPassword: string = '',
    editUser: boolean = false,
    editUserField: string = ''

  ) {
    this.UserId = UserId;
    this.UserName = UserName;
    this.UserSurname = UserSurname;
    this.UserEmail = UserEmail;
    this.UserPassword = UserPassword;
    this.editUser = editUser;
    this.editUserField= editUserField;
  }
}
