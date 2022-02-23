import { Injectable } from '@angular/core';
import { sampleCategories as categories } from '../../constants/sample-categories';
import { sampleTasks as tasks } from '../../constants/sample-tasks';
import { ICategory } from 'src/app/core/interfaces/category';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() {}

  getCategories() {
    return categories;
  }

  deleteCategory(category: ICategory) {
    categories.splice(
      categories.findIndex((categoryQuery) => category.id === categoryQuery.id),
      1
    );
    const tasksToRemove = tasks.filter(
      (task) => task.categoryID === category.id
    );

    tasksToRemove.forEach((task) => {
      tasks.splice(tasks.indexOf(task), 1);
    });
  }

  updateCategory(category: ICategory) {
    categories[
      categories.findIndex((categoryQuery) => category.id === categoryQuery.id)
    ].name = category.name;
    categories[
      categories.findIndex((categoryQuery) => category.id === categoryQuery.id)
    ].tasks = category.tasks;
  }

  addCategory(name: string) {
    categories.push({ name, id: uuidv4() });
  }
}
