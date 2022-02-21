import { Injectable } from '@angular/core';
import { ITask } from 'src/app/core/interfaces/task';
import { sampleTasks as tasks } from '../../constants/sample-tasks';
import { sampleCategories as categories } from '../../constants/sample-categories';
import { ICategory } from 'src/app/core/interfaces/category';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  // tasks: Task[] = sampleTasks;
  // categories: Category[] = sampleCategories;

  updateTask(task: ITask) {
    tasks[tasks.indexOf(task)].name = task.name;
    tasks[tasks.indexOf(task)].status = task.status;
  }

  getTasks(category: ICategory) {
    return tasks.filter((task) => {
      return task.categoryID === category.id;
    });
  }

  addTask(name: string, categoryID: string, order: number) {
    const newTask: ITask = {
      name,
      status: false,
      id: uuidv4(),
      categoryID: categoryID,
      order
    };
    tasks.push(newTask);

    return newTask;
  }

  deleteTask(task: ITask) {
    tasks.splice(tasks.indexOf(task), 1);

    const taskCategory = categories.find(
      (category) => category.id === task.categoryID
    );
    taskCategory?.tasks?.splice(
      taskCategory.tasks.indexOf(task.categoryID!),
      1
    );
  }

  constructor() {}
}
