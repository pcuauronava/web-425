/**
 * Title: app-routing.module.ts
 * Author: Professor Krasso
 * Date: 08/22/2023
 * Description: Routing file
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

const routes: Routes = [
  {
    path:'', redirectTo: '/composer-list', pathMatch: 'full'
  },
  //This was modified to add the composer-list path
  //it was opening the home component from a different path
  {
    path: 'composer-list', component: ComposerListComponent
  },
  {
    path: 'composer-details/:composerId', component: ComposerDetailsComponent
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
