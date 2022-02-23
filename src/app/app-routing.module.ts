import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { RoutePaths } from './core/constants/route-paths';

const routes: Routes = [
  { path: '', redirectTo: RoutePaths.Introduction, pathMatch: 'full' },
  { path: RoutePaths.Introduction, component: IntroductionComponent },
  { path: RoutePaths.Dashboard, component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
