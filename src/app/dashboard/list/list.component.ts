import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ICategory } from 'src/app/core/interfaces/category';
import { ITask } from 'src/app/core/interfaces/task';
import { Key } from 'src/app/core/constants/keyboard-keys';
import { TaskService } from 'src/app/core/services/task-service/task-service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() category!: ICategory;

  taskForm = this.fb.group({
    taskName: ['', Validators.required]
  });

  tasks: ITask[] = [];
  showError = true;

  constructor(public taskService: TaskService, private fb: FormBuilder) {}

  addTask() {
    if (this._taskName.errors) {
      this.showError = true;
    } else {
      const newTask = this.taskService.addTask(
        this.taskName,
        this.category.id,
        this.tasks.length
      );
      this.tasks.push(newTask);

      this.taskForm.reset();
    }
  }

  resetValidator() {
    this.showError = false;
  }

  deleteTask(task: ITask) {
    this.taskService.deleteTask(task);
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
      this.taskService.updateTask(task);
    });
  }

  updateTaskList() {
    if (this.category != undefined) {
      this.tasks = this.taskService
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
    this.taskService.updateTask(task);
  }

  renameTask(task: ITask) {
    this.tasks.find((taskElement) => taskElement.id === task.id)!.name =
      task.name;
    this.taskService.updateTask(task);
  }

  ngOnInit(): void {
    this.updateTaskList();
  }

  get _taskName() {
    return this.taskForm.get('taskName')!;
  }

  get taskName() {
    return this._taskName?.value;
  }
  set taskName(value: string) {
    this._taskName?.setValue(value);
  }
}
