import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/core/interfaces/category';
import { TaskService } from '../core/services/task-service/task-service';
import { CategoryService } from '../core/services/category-service/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService
  ) {}

  categories?: ICategory[];

  addCategory(name: string) {
    this.categoryService.addCategory(name);

    this.updateCategories();
  }

  deleteCategory(category: ICategory) {
    this.categoryService.deleteCategory(category);
    this.updateCategories();
  }

  updateCategory(category: ICategory) {
    this.categoryService.updateCategory(category);
  }

  updateCategories() {
    this.categories = this.categoryService.getCategories();
  }

  ngOnInit(): void {
    this.updateCategories();
  }
}
