import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../list-service';
import { Category } from 'src/models/category';
import { Task } from 'src/models/task';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  requriedFormControl = new FormControl('', [Validators.required]);
  tasks: Task[] = [];
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

  filterOngoingTasks(tasks: Task[]) {
    return tasks.filter((task) => !task.done);
  }

  filterDoneTasks(tasks: Task[]) {
    return tasks.filter((task) => task.done);
  }

  updateTaskList() {
    if (this.category != undefined) {
      this.tasks = this.listService.getTasks(this.category);
    }
  }
  ngOnInit(): void {
    this.updateTaskList();
  }
}
