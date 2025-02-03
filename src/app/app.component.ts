import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { USERS } from '../mock/users';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskListComponent,
    RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Udemy - Master Angular';
  selectedUserID:string = '';
  selectedUser: User | undefined;

  onSelectUser(id: string) {
    this.selectedUserID = id;
    this.selectedUser = this.retrieveUser(id);
    console.log(`user: ${this.selectedUserID}-${this.selectedUser?.name}`);
  }

  retrieveUser(id: string) {
    return this.users.find(user => user.id === id);
  }

  trackByUserId(index: number, user: User) {
    return user.id;
  }

  get users() {
    return USERS;
  }

}
