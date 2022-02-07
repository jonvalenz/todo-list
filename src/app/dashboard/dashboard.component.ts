import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/category';
import { ListService } from '../list-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private listService: ListService) { }

  categories?: Category[];

  ngOnInit(): void {
    this.categories = this.listService.getCategories();
  }

}
