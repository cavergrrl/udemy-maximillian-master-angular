import { Component, OnInit } from '@angular/core';
import { USERS } from '../../../mock/users';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  randomIndex = 0;
  user = {
    id: '',
    name: '',
    avatar: ''
  };

  constructor() {
    this.randomIndex = this.generateRandomIndex();
    this.user = USERS[this.randomIndex];
  }

  ngOnInit() {
    console.log('UserComponent initialized with user:', this.user);
  }

  onSelectUser() {
    console.log(`${this.user.name} selected`);
  }

  generateRandomIndex() {
    return Math.floor(Math.random() * USERS.length);
  }

  get avatarPath() {
    return `assets/users/${this.user.avatar}`;
  }
}
