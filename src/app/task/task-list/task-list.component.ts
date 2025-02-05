import {Component, Input, SimpleChanges} from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { User } from '../../models/user.model';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { UserService } from '../../services/user.service';

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

  tasks: Task[] = [];
  isAddingTask = false;

  constructor(private taskService: TaskService, private userService: UserService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && this.user) {
      this.loadTasks();
    }
    this.isAddingTask = false;
  }

  onCompleteTask(id: string) {
    this.taskService.completeTask(id);
    this.loadTasks();
    console.log(`task completed: ${id}`);
  }

  onStartAddTask() {
    this.isAddingTask = true;
    console.log('START: add task');
  }

  onCloseAddTask() {
    this.isAddingTask = false;
    console.log('CANCEL: add task');
  }

  private loadTasks() {
    if (this.user) {
      this.tasks = this.taskService.getTasksForUser(this.user?.id || '');
    }
  }

  get avatarPath() {
    return this.userService.getAvatarPath(this.user?.avatar || '');
  }

  get tasksForUser() {
    return this.tasks;
  }
}
