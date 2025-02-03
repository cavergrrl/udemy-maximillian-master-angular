import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './list/user/user.component';
import { TaskItemComponent } from './list/task-item/task-item.component';
import { USERS } from '../mock/users';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskItemComponent,
    NgFor, RouterOutlet],
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

  get users() {
    return USERS;
  }

}
