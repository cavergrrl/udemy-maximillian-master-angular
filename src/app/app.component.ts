import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './navigation/user/user.component';
import { USERS } from '../mock/users';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, UserComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Udemy - Master Angular';

  get users() {
    return USERS;
  }

  onSelectUser(id: string) {
    console.log(`user: ${id}`);
  }
}
