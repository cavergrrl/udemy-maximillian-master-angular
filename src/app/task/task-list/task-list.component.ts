import { Component, computed, Input } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { User } from '../../models/user.model';
import { Task } from '../../models/task.model';
import { TASKS } from '../../../mock/tasks';

@Component({
  selector: 'app-task-list',
  imports: [
    TaskItemComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input({ required:true }) user: User | undefined;

  onAddTask() {

  }

  get avatarPath() {
    return `assets/users/${this.user?.avatar}`;
  }

  get tasks() {
    return TASKS;
  }

  get tasksForUser() {
    return this.tasks.filter(task => task.userId === this.user?.id);
  }

}
