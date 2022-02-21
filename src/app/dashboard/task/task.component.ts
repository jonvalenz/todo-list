import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/core/interfaces/task';
import { ListService } from 'src/app/core/services/list-service/list-service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private listService: ListService) {}

  @Input() task: ITask = {};
  @Output() deleteTask = new EventEmitter<ITask>();
  @Output() toggleTask = new EventEmitter<ITask>();
  @Output() renameTask = new EventEmitter<ITask>();

  delete() {
    this.deleteTask.emit(this.task);
  }

  toggle() {
    this.toggleTask.emit(this.task);
  }

  rename() {
    this.renameTask.emit(this.task);
  }
}