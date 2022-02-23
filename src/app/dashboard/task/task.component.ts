import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/core/interfaces/task';
import { TaskService } from 'src/app/core/services/task-service/task-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  constructor(private taskService: TaskService, private fb: FormBuilder) {}

  taskForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    status: [Boolean]
  });

  @Input() task: ITask = {};
  @Output() deleteTask = new EventEmitter<ITask>();
  @Output() toggleTask = new EventEmitter<ITask>();
  @Output() renameTask = new EventEmitter<ITask>();

  ngOnInit(): void {
    this.taskForm.get('name')!.setValue(this.task.name);
    this.taskForm.get('status')!.setValue(this.task.status);
  }

  delete() {
    this.deleteTask.emit(this._task);
  }

  toggle() {
    this.toggleTask.emit(this._task);
  }

  rename() {
    this.renameTask.emit(this._task);
  }

  get _task(): ITask {
    return {
      id: this.task.id,
      name: this.name,
      status: this.status,
      categoryID: this.task.categoryID,
      order: this.task.order
    };
  }

  get id() {
    return this.task.id;
  }

  get _name() {
    return this.taskForm.get('name');
  }

  get _status() {
    return this.taskForm.get('status');
  }
  get name() {
    return this._name?.value;
  }

  get status() {
    return this._status?.value;
  }
}
