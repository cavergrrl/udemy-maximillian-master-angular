import { Component, Input } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { User } from '../../models/user.model';
import { Task } from '../../models/task.model';
import { TASKS } from '../../../mock/tasks';

@Component({
  selector: 'app-task-list',
  imports: [
    TaskItemComponent,
    NewTaskComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input({ required:true }) user: User | undefined;

  tasks: Task[] = this.allTasks;
  isAddingTask = false;

  onStartAddTask() {
    this.isAddingTask = true;
    console.log('START: add task');
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    console.log(`task completed: ${id}`);
  }

  get avatarPath() {
    return `assets/users/${this.user?.avatar}`;
  }

  get allTasks() {
    return TASKS;
  }

  get tasksForUser() {
    return this.tasks.filter(task => task.userId === this.user?.id);
  }

}
