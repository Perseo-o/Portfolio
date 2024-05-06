import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { HomeComponent } from './layout/home/home.component';
const routes: Routes = [
  { path: '', redirectTo: 'Portfolio/home', pathMatch: 'full' },
  {
    path: 'Portfolio',
    component: NavBarComponent,
    children: [
      { path: 'home', component: HomeComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
