import { Injectable } from '@angular/core';
import { Task } from 'src/models/task';
import { sampleTasks } from './constants/sample-tasks';
import { sampleCategories } from './constants/sample-categories';
import { Category } from 'src/models/category';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  tasks: Task[] = sampleTasks;
  categories: Category[] = sampleCategories;

  getCategories() {
    return sampleCategories;
  }

  deleteCategory(category: Category) {
    this.categories.splice(this.categories.indexOf(category), 1);
    this.tasks = this.tasks.filter(task => task.category?.id != category.id)
  }

  addCategory(name: string) {
    this.categories.push({ name, id: Date.now() });
  }

  getTasks(category: Category) {
    return this.tasks.filter((task) => {
      console.log(`${task.category?.id} === ${category.id}`)
      return task.category?.id === category.id;
    });
  }

  addTask(task: Task) {
    console.log(`pushing task ${task.category?.id}`);
    this.tasks.push({ name: task.name, done: false, id: Date.now(), category:task.category });
  }

  markTaskAsDone(task: Task) {
    this.tasks[this.tasks.indexOf(task)].done = true;
  }

  markTaskAsNotDone(task: Task) {
    this.tasks[this.tasks.indexOf(task)].done = false;
  }

  deleteTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  constructor() {}
}
