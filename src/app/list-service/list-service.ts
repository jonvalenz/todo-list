import { Injectable } from '@angular/core';
import { Task } from 'src/app/classes/task';
import { sampleTasks as tasks } from '../constants/sample-tasks';
import { sampleCategories as categories } from '../constants/sample-categories';
import { Category } from 'src/app/classes/category';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from 'src/models/task';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  // tasks: Task[] = sampleTasks;
  // categories: Category[] = sampleCategories;

  getCategories() {
    return categories;
  }

  deleteCategory(category: Category) {
    categories.splice(categories.indexOf(category), 1);
    const tasksToRemove = tasks.filter(
      (task) => task.categoryID != category.id,
    );

    tasksToRemove.forEach((task) => {
      tasks.splice(tasks.indexOf(task), 1);
    });
  }

  updateCategory (category: Category){
    categories[categories.indexOf(category)].name = category.name;
    categories[categories.indexOf(category)].tasks = category.tasks;
  }

  updateTask (task: Task){
    tasks[tasks.indexOf(task)].name = task.name;
    tasks[tasks.indexOf(task)].status = task.status;
  }

  addCategory(name: string) {
    categories.push({ name, id: uuidv4() });
  }

  getTasks(category: Category) {
    return tasks.filter((task) => {
      return task.categoryID === category.id;
    });
  }

  addTask(name: string, categoryID: string) {
    const newTask: Task = {
      name,
      status: false,
      id: uuidv4(),
      categoryID: categoryID,
    };
    tasks.push(newTask);

    return newTask;
  }

  deleteTask(task: Task) {
    tasks.splice(tasks.indexOf(task), 1);

    const taskCategory = categories.find(category => category.id === task.categoryID);
    taskCategory?.tasks?.splice(taskCategory.tasks.indexOf(task.categoryID),1);
  }

  constructor() {}
}
