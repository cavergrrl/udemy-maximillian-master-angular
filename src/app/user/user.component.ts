import { Component } from '@angular/core';
import { Input, input } from '@angular/core';
import { output } from '@angular/core';
// import { Output, EventEmitter } from '@angular/core';
import { computed } from '@angular/core';
// import { signal } from '@angular/core';
import { User } from '../models/user.model';
import { CardComponent } from '../ui/card/card.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [
    CardComponent
  ],
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User; // Angular 18 and below
  @Input({ required: true }) selected: boolean = false;
  userID = input.required<string>(); // latest

  // @Output() select = new EventEmitter(); // Angular 18 and below
  select = output<string>(); // latest

  avatarPath = computed(() => this.userService.getAvatarPath(this.user.avatar));

  constructor(private userService: UserService) {}

  onSelectUser() {
    console.log(`selected user: ${this.userID}-${this.user.name}`);
    // signal(this.userID);
    this.select.emit(this.user.id);
  }

}
