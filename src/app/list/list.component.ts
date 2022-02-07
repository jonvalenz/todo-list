import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/task';
import { ListService } from '../list-service';
import { Category } from 'src/models/category';
import { Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(public listService: ListService) {}

  taskList?: Task[];
  @Input() category?: Category;

  addTask(name: string) {
    this.listService.addTask(name);
  }

  //task service function insert here
  ngOnInit(): void {
    console.log(`gettings tasks for ${this.category?.id}`);
    this.taskList =
      this.category?.name != undefined
        ? this.listService.getTasks(this.category)
        : undefined;
  }
}
