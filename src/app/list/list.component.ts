import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormGroupDirective } from '@angular/forms';
import { ICategory } from 'src/app/models/category';
import { ITask } from 'src/app/models/task';
import { Key } from '../constants/keyboard-keys';
import { ListService } from '../services/list-service/list-service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() category!: ICategory;

  @ViewChild(FormGroupDirective, { static: false })
  formDirective!: FormGroupDirective;

  requriedFormControl = new FormControl('', [Validators.required]);
  tasks: ITask[] = [];
  newTaskName = '';
  showError = true;

  listForm: FormGroup;

  constructor(public listService: ListService) {
    this.listForm = new FormGroup({});
  }

  addTask() {
    if (this.requriedFormControl.errors) {
      this.showError = true;
    } else {
      const newTask = this.listService.addTask(
        this.newTaskName,
        this.category.id,
        this.tasks.length
      );
      this.tasks.push(newTask);

      this.newTaskName = '';
      this.resetValidator();
    }
  }

  resetValidator() {
    this.showError = false;
    this.formDirective.resetForm();
    this.requriedFormControl.markAsPristine();
    this.requriedFormControl.markAsUntouched();
  }

  deleteTask(task: ITask) {
    this.listService.deleteTask(task);
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  onKeypress(keyboardEvent: KeyboardEvent) {
    if (keyboardEvent.key === Key.Enter) {
      this.addTask();
    }
  }

  getDoneTasks(): ITask[] {
    return this.tasks.filter((task) => task.status);
  }

  dropTasks(event: CdkDragDrop<ITask[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);

    event.container.data.forEach((task, index) => {
      task.order = index;
      this.listService.updateTask(task);
    });
  }

  updateTaskList() {
    if (this.category != undefined) {
      this.tasks = this.listService
        .getTasks(this.category)
        .sort((taskA, taskB) => {
          if (taskA.order! > taskB.order!) {
            return 1;
          }

          if (taskA.order! < taskB.order!) {
            return -1;
          }

          return 0;
        });
    }
  }

  updateTaskStatus(task: ITask) {
    this.tasks.find((taskElement) => taskElement.id === task.id)!.status =
      task.status;
    this.listService.updateTask(task);
  }

  renameTask(task: ITask) {
    this.tasks.find((taskElement) => taskElement.id === task.id)!.name =
      task.name;
    this.listService.updateTask(task);
  }

  ngOnInit(): void {
    this.updateTaskList();
  }
}
