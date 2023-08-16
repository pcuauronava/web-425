import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Add this
import { ContactComponent } from './contact/contact.component'; // Add this
import { AboutComponent } from './about/about.component'; // Add this

// // go to the home component
// http://localhost:4200
// http://localhost:4200/home

// // go to the contact component
// http://localhost:4200/contact

// // go to the about component
// http://localhost:4200/about

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home',
    component: HomeComponent
  }, // route for Home page
  {
    path:'contact',
    component: ContactComponent
  }, // route for Contact page
  {
    path:'about',
    component: AboutComponent
  }, // Route for About page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
