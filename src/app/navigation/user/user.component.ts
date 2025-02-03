import { Component, Input, input, signal, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: { name: string; avatar: string };
  userID = input.required<string>();

  avatarPath = computed(() => `assets/users/${this.user.avatar}`);

  onSelectUser() {
    console.log(`selected user: ${this.userID}-${this.user.name}`);
    signal(this.userID);
  }

}
