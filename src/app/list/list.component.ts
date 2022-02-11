import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../list-service/list-service';
import { Category } from 'src/app/classes/category';
import { Task } from 'src/app/classes/task';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input() category!: Category;

  @ViewChild(FormGroupDirective, { static: false })
  formDirective!: FormGroupDirective;

  requriedFormControl = new FormControl('', [Validators.required]);
  tasks: Task[] = [];
  newTaskName: string = '';
  showError: boolean = true;

  listForm: FormGroup;

  constructor(public listService: ListService) {
    this.listForm = new FormGroup({});
  }
  addTask() {
    if (this.requriedFormControl.errors) {
      this.showError = true;
      return;
    }
    const newTask = this.listService.addTask(
      this.newTaskName,
      this.category.id,
      this.tasks.length,
    );
    this.tasks.push(newTask);

    this.newTaskName = '';
    this.resetValidator();
  }

  resetValidator() {
    this.showError = false;
    this.formDirective.resetForm();
    this.requriedFormControl.markAsPristine();
    this.requriedFormControl.markAsUntouched();
  }

  deleteTask(task: Task) {
    this.listService.deleteTask(task);
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  onKeypress(keyboardEvent: KeyboardEvent) {
    if (keyboardEvent.key === 'Enter') this.addTask();
  }

  getDoneTasks(): Task[] {
    return this.tasks.filter((task) => task.status);
  }

  dropTasks(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    let i = 0;
    event.container.data.forEach((task) => {
      task.order = i;
      i = i + 1;
      this.listService.updateTask(task);
    });
  }

  updateTaskList() {
    if (this.category != undefined) {
      this.tasks = this.listService
        .getTasks(this.category)
        .sort((taskA, taskB) => {
          if (taskA.order > taskB.order) return 1;

          if (taskA.order < taskB.order) return -1;

          return 0;
        });
    }
  }

  updateTaskStatus(task: Task) {
    this.tasks.find((taskElement) => taskElement.id === task.id)!.status =
      task.status;
    this.listService.updateTask(task);
  }

  renameTask(task: Task) {
    this.tasks.find((taskElement) => taskElement.id === task.id)!.name =
      task.name;
    this.listService.updateTask(task);
  }

  ngOnInit(): void {
    this.updateTaskList();
  }
}
