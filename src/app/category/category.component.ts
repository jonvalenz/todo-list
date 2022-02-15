import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ICategory } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor() {}

  @Input() category: ICategory = { name: '', id: '0' };
  @Output() deleteCategory = new EventEmitter<ICategory>();
  @Output() renameCategory = new EventEmitter<ICategory>();

  delete() {
    this.deleteCategory.emit(this.category);
  }

  rename() {
    this.renameCategory.emit(this.category);
  }

  ngOnInit(): void {}
}
