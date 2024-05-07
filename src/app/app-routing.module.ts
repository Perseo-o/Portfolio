import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { HomeComponent } from './layout/home/home.component';
import { ContactComponent } from './layout/contact/contact.component';
const routes: Routes = [
  { path: '', redirectTo: 'Portfolio/home', pathMatch: 'full' },
  {
    path: 'Portfolio',
    component: NavBarComponent,
    children: [
      { path: 'Home', component: HomeComponent },
      { path: 'Contact', component: ContactComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
