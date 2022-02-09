import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/models/task';

import { ListService } from '../list-service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  constructor(private listService: ListService) {}

  @Input() task?: Task;
  @Output() deleteTask = new EventEmitter<Task>();

  delete() {
    console.log('emititng evnet');
    this.deleteTask.emit(this.task);
  }

  ngOnInit(): void {}
}
