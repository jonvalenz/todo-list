import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/classes/task';
import { ListService } from '../list-service/list-service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  constructor(private listService: ListService) {}

  @Input() task: Task = new Task();
  @Output() deleteTask = new EventEmitter<Task>();
  @Output() toggleTask = new EventEmitter<Task>();
  @Output() renameTask = new EventEmitter<Task>();

  delete() {
    this.deleteTask.emit(this.task);
  }

  toggle() {
    this.toggleTask.emit(this.task);
  }

  rename() {
    this.renameTask.emit(this.task);
  }

  ngOnInit(): void {}
}
