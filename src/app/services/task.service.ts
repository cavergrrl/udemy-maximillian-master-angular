import {Injectable} from '@angular/core';
import { Task } from '../models/task.model';
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

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  completeTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  private loadTasks(): void {
    this.tasks = TASKS;
  }
}
