import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { CategoryComponent } from './category/category.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ListComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    DragDropModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule {}
