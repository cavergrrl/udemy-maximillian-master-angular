import { Component, Input } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { User } from '../../models/user.model';
import { Task, NewTask } from '../../models/task.model';
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

  ngOnChanges() {
    this.isAddingTask = false;
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    console.log(`task completed: ${id}`);
  }

  onStartAddTask() {
    this.isAddingTask = true;
    console.log('START: add task');
  }

  onAddTask(task: NewTask) {
    this.tasks.push({
      id: Math.random().toString(),
      userId: this.user?.id || '',
      ...task
    });
    this.isAddingTask = false;
    console.log(`ADD: task: ${task.title}`);

  }

  onCancelAddTask() {
    this.isAddingTask = false;
    console.log('CANCEL: add task');
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
