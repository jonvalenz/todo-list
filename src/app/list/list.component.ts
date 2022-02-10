import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../list-service';
import { Category } from 'src/models/category';
import { Task } from 'src/models/task';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  requriedFormControl = new FormControl('', [Validators.required]);
  tasks: Task[] = [];
  ongoingTasks: Task[] = [];
  newTaskName: string = '';
  showError: boolean = true;
  @Input() category?: Category;

  listForm: FormGroup;
  @ViewChild(FormGroupDirective, { static: false })
  formDirective!: FormGroupDirective;

  constructor(public listService: ListService) {
    this.listForm = new FormGroup({});
  }
  addTask() {
    if (this.requriedFormControl.errors) {
      this.showError = true;
      return;
    }
    const newTask = this.listService.addTask({
      name: this.newTaskName,
      category: this.category,
    });
    this.tasks.push(newTask);
    this.refreshOngoingTasks();

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
    this.refreshOngoingTasks();
  }

  onKeypress(keyboardEvent: KeyboardEvent) {
    if (keyboardEvent.key === 'Enter') this.addTask();
  }

  refreshOngoingTasks() {
    this.ongoingTasks = this.tasks.filter((task) => !task.status);
  }

  getDoneTasks(): Task[] {
    return this.tasks.filter((task) => task.status);
  }

  dropOngoingTasks(event: CdkDragDrop<Task[]>) {
    moveItemInArray(this.ongoingTasks, event.previousIndex, event.currentIndex);
  }

  updateTaskList() {
    if (this.category != undefined) {
      this.tasks = this.listService.getTasks(this.category);
    }
  }

  updateTaskStatus(task: Task) {
    this.tasks.find((taskElement) => taskElement.id === task.id)!.status =
      task.status;
    this.refreshOngoingTasks();
  }

  ngOnInit(): void {
    this.updateTaskList();
    this.refreshOngoingTasks();
  }
}
