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
  newTaskName:string = '';
  @Input() category?: Category;

  addTask(name: string) {
    console.log(`adding ${name})`);
    this.listService.addTask({ name, category: this.category });
    this.updateTaskList();
    this.newTaskName = '';
  }

  deleteTask(task:Task) {
    console.log(`deleteing ${task.name}`)
    this.listService.deleteTask(task);
    this.updateTaskList();
  }

  updateTaskList() {
    console.log(`gettings tasks for ${this.category?.id}`);
    this.taskList =
      this.category?.name != undefined
        ? this.listService.getTasks(this.category)
        : undefined;
  }

  //task service function insert here
  ngOnInit(): void {
    this.updateTaskList();
  }
}
