import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor() {}

  @Input() category: Category = { name: '', id: '0' };
  @Output() deleteCategory = new EventEmitter<Category>();
  @Output() renameCategory = new EventEmitter<Category>();

  delete() {
    this.deleteCategory.emit(this.category);
  }

  rename() {
    this.renameCategory.emit(this.category);
  }

  ngOnInit(): void {}
}
