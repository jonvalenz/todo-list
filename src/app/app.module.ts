import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { MatInputModule } from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, ListComponent, TaskComponent, CategoryComponent, DashboardComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
