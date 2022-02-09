import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/category';
import { ListService } from '../list-service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
    console.log(`deleteing ${category.name}`);
    this.listService.deleteCategory(category);
    this.updateCategories();
  }

  updateCategories() {
    this.categories = this.listService.getCategories();
  }
  drop(event: CdkDragDrop<Category[]>) {
    if (this.categories)
      moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.updateCategories();
  }
}
