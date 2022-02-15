import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { ListService } from '../list-service/list-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private listService: ListService) {}

  categories?: ICategory[];

  addCategory(name: string) {
    this.listService.addCategory(name);

    this.updateCategories();
  }

  deleteCategory(category: ICategory) {
    this.listService.deleteCategory(category);
    this.updateCategories();
  }

  updateCategory(category: ICategory) {
    this.listService.updateCategory(category);
  }

  updateCategories() {
    this.categories = this.listService.getCategories();
  }

  ngOnInit(): void {
    this.updateCategories();
  }
}
