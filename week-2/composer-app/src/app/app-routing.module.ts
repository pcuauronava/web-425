import { HomeComponent } from './../../../my-app/src/app/home/home.component';
/**
 * Title: app-routing.module.ts
 * Author: Professor Krasso
 * Date: 08/18/2023
 * Description: Routing file
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path: 'composer-list', component: ComposerListComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ComposerListComponent, AboutComponent, ContactComponent];
