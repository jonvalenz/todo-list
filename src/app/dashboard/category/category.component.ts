import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from 'src/app/core/interfaces/category';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.name = this.category.name!;
  }
  categoryControl = this.fb.control('');

  @Input() category: ICategory = { name: '', id: '0' };
  @Output() deleteCategory = new EventEmitter<ICategory>();
  @Output() renameCategory = new EventEmitter<ICategory>();

  delete() {
    this.deleteCategory.emit({ id: this.category.id, name: this.name });
  }

  rename() {
    this.renameCategory.emit({ id: this.category.id, name: this.name });
  }

  get name() {
    return this.categoryControl?.value;
  }

  set name(value: string) {
    this.categoryControl?.setValue(value);
  }
}
