import { Component, computed, signal } from '@angular/core';
import { USERS } from '../../../mock/users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = signal(USERS[this.generateRandomIndex()]);

  onSelectUser() {
    console.log(`user currently: ${this.user().name}`);
    this.user.set(USERS[this.generateRandomIndex()]);
    console.log(`user updated: ${this.user().name}`);
  }

  generateRandomIndex() {
    return Math.floor(Math.random() * USERS.length);
  }

  get avatarPath() {
    return computed( () => `assets/users/${this.user().avatar}`);
  }
}
