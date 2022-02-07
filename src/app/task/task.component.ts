import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
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

  delete(task: Task) {
    this.listService.deleteTask(task);
  }

  ngOnInit(): void {}
}
