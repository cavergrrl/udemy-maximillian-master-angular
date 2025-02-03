import { Component, Input} from '@angular/core';
import { EventEmitter, Output} from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input({ required:true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  markAsComplete() {
    this.complete.emit(this.task.id);
  }
}
