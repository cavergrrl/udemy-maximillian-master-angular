import {Injectable} from '@angular/core';
import { User } from '../models/user.model';
import {USERS} from '../../mock/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() {
    this.loadUsers();
  }

  getAvatarPath(avatarName: string): string {
    return `assets/users/${avatarName}`;
  }

  getUser(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  private loadUsers(): void {
    this.users = USERS;
  }

  get allUsers(): User[] {
    return this.users;
  }
}
