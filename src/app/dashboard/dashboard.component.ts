import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/category';
import { ListService } from '../list-service/list-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private listService: ListService) {}

  categories?: Category[];

  addCategory(name: string) {
    this.listService.addCategory(name);

    this.updateCategories();
  }

  deleteCategory(category: Category) {
    this.listService.deleteCategory(category);
    this.updateCategories();
  }

  updateCategory(category: Category) {
    this.listService.updateCategory(category);
  }

  updateCategories() {
    this.categories = this.listService.getCategories();
  }

  ngOnInit(): void {
    this.updateCategories();
  }
}
