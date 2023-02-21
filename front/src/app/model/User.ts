import { IUser } from './IUser';

export class User implements IUser {
  UserId: number;
  UserName: string;
  UserSurname: string;
  UserEmail: string;
  UserDate: string;
  editUser: boolean;
  editUserField: string;

  constructor(
    UserId: number = 0,
    UserName: string = '',
    UserSurname: string = '',
    UserEmail: string = '',
    UserDate: string = '',
    editUser: boolean = false,
    editUserField: string = ''

  ) {
    this.UserId = UserId;
    this.UserName = UserName;
    this.UserSurname = UserSurname;
    this.UserEmail = UserEmail;
    this.UserDate = UserDate;
    this.editUser = editUser;
    this.editUserField= editUserField;
  }
}
