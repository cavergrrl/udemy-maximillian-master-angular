import {Injectable} from '@angular/core';
import {NewTask, Task} from '../models/task.model';
import { TASKS } from '../../mock/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
    else {
      this.loadTasks();
    }
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
    this.saveTasks();
  }

  completeTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  private loadTasks(): void {
    this.tasks = TASKS;
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
