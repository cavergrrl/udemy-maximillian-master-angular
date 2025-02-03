import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input({ required:true }) userID!: string;
  @Input({ required:true }) userName: string | undefined;

}
