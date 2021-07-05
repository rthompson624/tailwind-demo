import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DesignAndLayoutComponent } from './components/design-and-layout/design-and-layout.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'design-and-layout',
    component: DesignAndLayoutComponent
  },
  {
    path: 'responsive',
    component: ResponsiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
