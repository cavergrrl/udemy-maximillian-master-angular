import { Component } from '@angular/core';
import { USERS } from '../../../mock/users';

const randomIndex = Math.floor(Math.random() * USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = USERS[randomIndex];

  onSelectUser() {
    console.log(`${this.user.name} selected`);
  }

  get avatarPath() {
    return `assets/users/${this.user.avatar}`;
  }
}
