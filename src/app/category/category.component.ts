import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/models/category';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor() {}

  formControl: FormControl = new FormControl();
  @Input() category?: Category;

  ngOnInit(): void {}
}
