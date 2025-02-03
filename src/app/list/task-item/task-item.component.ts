import {Component, Input} from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input({ required:true }) user: User | undefined;

}
