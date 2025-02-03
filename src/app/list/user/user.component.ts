import { Component } from '@angular/core';
import { Input, input } from '@angular/core';
import { Output, output, EventEmitter } from '@angular/core';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: { id: string, name: string; avatar: string }; // Angular 18 and below
  userID = input.required<string>(); // latest

  // @Output() select = new EventEmitter(); // Angular 18 and below
  select = output<string>(); // latest

  avatarPath = computed(() => `assets/users/${this.user.avatar}`);

  onSelectUser() {
    console.log(`selected user: ${this.userID}-${this.user.name}`);
    // signal(this.userID);
    this.select.emit(this.user.id);
  }

}
