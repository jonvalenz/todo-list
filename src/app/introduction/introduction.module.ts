import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IntroductionComponent],
  imports: [CommonModule, MatCardModule, RouterModule],
  exports: []
})
export class IntroductionModule {}
