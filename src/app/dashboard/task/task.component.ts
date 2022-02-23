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
    nameControl: ['', Validators.required],
    statusControl: [Boolean]
  });

  @Input() task: ITask = {};
  @Output() deleteTask = new EventEmitter<ITask>();
  @Output() toggleTask = new EventEmitter<ITask>();
  @Output() renameTask = new EventEmitter<ITask>();

  ngOnInit(): void {
    this.taskForm.get('nameControl')!.setValue(this.task.name);
    this.taskForm.get('statusControl')!.setValue(this.task.status);
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

  get nameControl() {
    return this.taskForm.get('nameControl');
  }

  get statusControl() {
    return this.taskForm.get('statusControl');
  }
  get name() {
    return this.nameControl?.value;
  }

  get status() {
    return this.statusControl?.value;
  }
}
