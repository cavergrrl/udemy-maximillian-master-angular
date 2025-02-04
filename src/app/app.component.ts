import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { User } from './models/user.model';
import { UserService } from './services/user.service';

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

  constructor(private userService: UserService) {}

  onSelectUser(id: string) {
    this.selectedUserID = id;
    this.selectedUser = this.userService.getUser(id);
    console.log(`user: ${this.selectedUserID}-${this.selectedUser?.name}`);
  }

  trackByUserId(index: number, user: User) {
    return user.id;
  }

  get users() {
    return this.userService.allUsers;
  }

}
