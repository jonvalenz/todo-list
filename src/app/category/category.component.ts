import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Category } from 'src/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor() {}

  @Input() category: Category = { name: '', id: 0 };
  @Output() deleteCategory = new EventEmitter<Category>();

  delete() {
    this.deleteCategory?.emit(this.category);
  }

  ngOnInit(): void {}
}
