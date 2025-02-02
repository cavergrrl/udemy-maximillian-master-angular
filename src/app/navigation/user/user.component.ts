import { Component, computed, signal } from '@angular/core';
import { USERS } from '../../../mock/users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  randomIndex = this.generateRandomIndex();
  user = signal(USERS[this.randomIndex]);
  avatarPath = computed(() => `assets/users/${this.user().avatar}`);

  onSelectUser() {
    console.log(`user currently: ${this.user().name}`);
    const index = this.generateRandomIndex();
    this.user.set(USERS[index]);
    console.log(`user updated: ${this.user().name}`);
  }

  generateRandomIndex() {
    return Math.floor(Math.random() * USERS.length);
  }

  /*get avatarPath() {
    return computed( () => `assets/users/${this.user().avatar}`);
  }*/
}
