import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required:true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  titleValue = '';
  summaryValue = '';
  dueDateValue = '';

  constructor(private taskService: TaskService) {}

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      id: Math.random().toString(),
      userId: this.userId,
      title: this.titleValue,
      summary: this.summaryValue,
      dueDate: this.dueDateValue
    });

    this.close.emit();
  }
}
