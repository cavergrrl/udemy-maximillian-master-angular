import {Injectable} from '@angular/core';
import {NewTask, Task} from '../models/task.model';
import { TASKS } from '../../mock/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    this.loadTasks();
  }

  getTasksForUser(userId: string): Task[] {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(userId: string, task: NewTask): void {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate
    });
  }

  completeTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  private loadTasks(): void {
    this.tasks = TASKS;
  }
}
